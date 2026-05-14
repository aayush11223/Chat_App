<template>
  <v-app>
    <v-main>
      <v-container fluid class="pa-0">
        <v-row no-gutters class="chat-layout">
          <v-col cols="12" sm="4" md="3">
            <div class="panel ma-3 rounded-lg">
              <SideBar :users="users" @select-user="selectUser" />
            </div>
          </v-col>

          <v-col cols="12" :sm="8" :md="showColumn ? 6 : 9">
            <div class="panel ma-3 rounded-lg">
              <InBox
                v-if="selectedUser"
                :selectedUser="selectedUser"
                @change-col="column"
              />
            </div>
          </v-col>

          <template v-if="showColumn">
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
import { getToken, isLoggedIn } from "../utilities/auth.js";
import { users } from "../components/constants/name.js";

const API = process.env.VUE_APP_LINK;

export default {
  data() {
    return {
      users: users,
      selectedUser: users[0],
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