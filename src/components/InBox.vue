<template>
  <v-container fluid class="pa-0 ma-0" style="width: 100%">
    <v-card
      flat
      class="mx-auto rounded-0 mb-10"
      style="width: 100%; height: 80px; cursor: pointer"
    >
      <div
        class="d-flex align-center px-3"
        style="height: 100%; gap: 12px; border-bottom: 1px solid #dcdcdc"
      >
        <v-avatar size="38">
          <v-img :src="selectedUser.profile" :alt="selectedUser.name" />
        </v-avatar>

        <div class="d-flex flex-column justify-center">
          <span style="font-size: 14px; font-weight: 600">{{
            selectedUser.name
          }}</span>
          <span style="font-size: 12px; color: #888">Active Now</span>
        </div>
      </div>
    </v-card>

    <v-main style="height: 60vh"> hello </v-main>

    <v-footer style="border-top: 1px solid black; height: none">
      <v-responsive max-width="80%">
        <v-text-field
          v-model="userInput"
          placeholder="Type something..."
          outlined
          dense
          hide-details
          class="ml-8 mt-5"
        ></v-text-field>
      </v-responsive>

      <v-btn
        class="ml-8 mt-5"
        fab
        style="border: 1px solid black; width: 40px; height: 40px"
      >
        <v-icon>mdi-send</v-icon>
      </v-btn>
    </v-footer>
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