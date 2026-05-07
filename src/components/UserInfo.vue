<template>
  <v-container
    fluid
    class="pa-0 ma-0 d-flex justify-center align-center"
    style="height: 80vh"
  >
    <div class="d-flex flex-column align-center justify-center">
      <div class="mb-4">
        <v-avatar size="80">
          <v-img :src="users[0].profile" :alt="users[0].name" />
        </v-avatar>
      </div>

      <div class="d-flex flex-column align-center text-center">
        <span style="font-size: 20px; font-weight: 600">{{
          users[0].name
        }}</span>
        <span style="font-size: 20px; color: #888">{{
          users[0].designation
        }}</span>
      </div>
    </div>
  </v-container>
</template>

<script>
import { users } from "../components/constants/name.js";

export default {
  data() {
    return {
      users: users,
    };
  },
};
</script>

<style scoped>
</style>