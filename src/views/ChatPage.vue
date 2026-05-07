<template>
  <v-app>
    <v-main>
      <v-container fluid class="pa-0">
        <v-row no-gutters class="chat-layout">
          <v-col cols="3">
            <div class="panel ma-3 rounded-lg"><SideBar /></div>
          </v-col>

          <v-col cols="6">
            <div class="panel ma-3 rounded-lg"><InBox /></div>
          </v-col>

          <v-col cols="3">
            <div class="panel ma-3 rounded-lg"><UserInfo /></div>
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
export default {
  components: {
    SideBar,
    InBox,
    UserInfo,
  },
};
</script>

<style scoped>
.panel {
  min-height: 95vh;
  border: 1px solid black;
}
</style>