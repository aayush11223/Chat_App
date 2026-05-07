<template>
  <v-container fluid class="pa-0 ma-0" style="width: 100%">
    <v-card
      class="mx-auto rounded-0 mb-10"
      style="
        border-bottom: 1px solid balck;
        width: 100%;
        height: 80px;
        cursor: pointer;
      "
    >
      <div
        class="d-flex align-center"
        style="height: 100%; padding: 0 12px; gap: 12px"
      >
        <v-avatar size="38">
          <v-img :src="users[0].profile" :alt="users[0].name" />
        </v-avatar>

        <div class="d-flex flex-column justify-center">
          <span style="font-size: 14px; font-weight: 600">{{
            users[0].name
          }}</span>
          <span style="font-size: 12px; color: #888">Active Now</span>
        </div>
      </div>
    </v-card>

    <v-main style="height: 80vh"> hello </v-main>

    <v-footer style="border-top: 1px solid black; height: 85px">
      <v-responsive max-width="80%">
        <v-text-field
          v-model="userInput"
          placeholder="Type something..."
          outlined
          dense
          hide-details
          class="ml-8"
        ></v-text-field>
      </v-responsive>

      <v-btn
        class="ml-8"
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