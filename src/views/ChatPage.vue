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

          <v-col :cols="showColumn ? 6 : 9">
            <div class="panel ma-3 rounded-lg">
              <InBox :selectedUser="selectedUser" @change-col="column" />
            </div>
          </v-col>

          <template v-if="showColumn">
            <v-col cols="3">
              <div class="panel ma-3 rounded-lg">
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
import SideBar from "../components/SideBar.vue";
import InBox from "../components/InBox.vue";
import UserInfo from "../components/UserInfo.vue";
import { users } from "../components/constants/name.js";
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
  methods: {
    selectUser(user) {
      this.selectedUser = user;
    },
    column() {
      this.showColumn = true;
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