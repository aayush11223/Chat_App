<template>
  <v-app>
    <v-main>
      <v-container fluid class="pa-0">
        <v-row no-gutters class="chat-layout">
          <v-col cols="3">
            <div class="panel ma-3 rounded-lg">
              <SideBar :users="users" @select-user="selectUser" />
            </div>
          </v-col>

          <v-col cols="6">
            <div class="panel ma-3 rounded-lg">
              <InBox :selectedUser="selectedUser" />
            </div>
          </v-col>

          <v-col cols="3">
            <div class="panel ma-3 rounded-lg">
              <UserInfo :selectedUser="selectedUser" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import InBox from "../components/InBox.vue";
import UserInfo from "../components/UserInfo.vue";
import { users } from "../components/constants/name.js";
export default {
  data() {
    return {
      users: users,
      selectedUser: users[0],
    };
  },
  components: {
    SideBar,
    InBox,
    UserInfo,
  },
  methods: {
    selectUser(user) {
      this.selectedUser = user;
    },
  },
};
</script>

<style scoped>
.panel {
  min-height: 95vh;
  border: 1px solid black;
}
</style>