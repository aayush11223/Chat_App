<template>
  <v-app>
    <v-main>
      <v-container fluid class="pa-0">
        <v-row no-gutters class="chat-layout">
          <v-col
            cols="12"
            :sm="selectedUser ? 4 : 12"
            :md="selectedUser ? 3 : 12"
          >
            <div class="panel ma-3 rounded-lg">
              <SideBar :users="users" @select-user="selectUser" />
            </div>
          </v-col>

          <v-col v-if="selectedUser" cols="12" :sm="8" :md="showColumn ? 6 : 9">
            <div class="panel ma-3 rounded-lg">
              <InBox :selectedUser="selectedUser" @change-col="column" />
            </div>
          </v-col>

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
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import SideBar from "../components/SideBar.vue";
import InBox from "../components/InBox.vue";
import UserInfo from "../components/UserInfo.vue";
import { getToken, isLoggedIn } from "../utilities/token.js";

const API = process.env.VUE_APP_LINK;

export default {
  data() {
    return {
      users: [],
      selectedUser: null,
      showColumn: false,
    };
  },

  components: {
    SideBar,
    InBox,
    UserInfo,
  },

  async created() {
    if (!isLoggedIn()) {
      this.$router.push("/login");
      return;
    }
    try {
      const { data } = await axios.get(`${API}/api/session`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      console.log("Session data:", data);

      const usersResponse = await axios.get(`${API}/api/users`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });

      this.users = usersResponse.data.users.map((user) => ({
        id: user.id,
        name: user.username,
        msg: user.email,
        designation: "User",
        profile:
          "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bc01c83c3da0425e9baa6c7a9204af81",
      }));
    } catch (err) {
      this.$router.push("/login");
    }
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
  min-height: 95vh;
  border: 1px solid black;
  overflow: hidden;
}
</style>
