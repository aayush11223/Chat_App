<template>
  <v-container fill-height fluid class="pa-0 background-image">
    <v-row no-gutters class="chat-layout">
      <!-- Sidebar column -->
      <v-col cols="12" :sm="selectedUser ? 4 : 12" :md="selectedUser ? 3 : 12">
        <div
          class="ma-3 rounded-lg"
          style="
            height: 87vh;
            border: 1px solid #e1e1e180;
            overflow-y: auto;
            overflow-x: hidden;
          "
        >
          <SideBar :users="users" @select-user="selectUser" />
        </div>
      </v-col>

      <!-- InBox column -->
      <v-col v-if="selectedUser" cols="12" :sm="8" :md="showColumn ? 6 : 9">
        <div class="panel ma-3 rounded-lg">
          <InBox
            :selectedUser="selectedUser"
            :currentUser="currentUser"
            @change-col="column"
          />
        </div>
      </v-col>

      <!-- UserInfo column -->
      <template v-if="selectedUser && showColumn">
        <v-col cols="12" md="3">
          <div class="panel ma-3 rounded-lg">
            <v-row justify="end" no-gutters>
              <v-btn color="error" height="30" icon @click="closeColumn">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-row>
            <UserInfo :selectedUser="selectedUser" />
          </div>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import SideBar from "../components/SideBar.vue";
import InBox from "../components/InBox.vue";
import UserInfo from "../components/UserInfo.vue";
import { getToken } from "../utilities/token.js";

const API = process.env.VUE_APP_LINK;

export default {
  name: "ChatPage",

  components: { SideBar, InBox, UserInfo },

  // currentUser is passed down from AppLayout via router-view
  props: {
    currentUser: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      users: [],
      selectedUser: null,
      showColumn: false,
    };
  },

  created() {
    axios
      .get(`${API}/api/users`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      .then((res) => {
        this.users = res.data.users.map((user) => ({
          id: user.id,
          name: user.username,
          msg: user.email,
          designation: "User",
          profile:
            "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&s=bc01c83c3da0425e9baa6c7a9204af81",
        }));
      })
      .catch((err) => {
        console.error("Failed to load users:", err);
      });
  },

  methods: {
    selectUser(user) {
      this.selectedUser = user;
    },
    column() {
      this.showColumn = true;
    },
    closeColumn() {
      this.showColumn = false;
    },
  },
};
</script>

<style scoped>
.panel {
  height: 87vh;
  border: 1px solid #e1e1e180;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.background-image {
  background-image: url("../assets/signup.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>