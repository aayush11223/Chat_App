<template>
  <v-app-bar app flat color="#1a1a2e" dark height="60">
    <!-- App title/logo on the left -->
    <v-app-bar-title>
      <span class="white--text font-weight-bold" style="font-size: 1.1rem">
        💬 Chat App
      </span>
    </v-app-bar-title>

    <v-spacer />

    <!-- User profile section on the right -->
    <template v-if="currentUser">
      <v-avatar size="32" class="mr-2">
        <v-img
          :src="currentUser.profile || defaultAvatar"
          :alt="currentUser.username"
        />
      </v-avatar>

      <span class="white--text text-body-2 mr-4">
        {{ currentUser.username }}
      </span>
    </template>

    <!-- Logout button -->
    <v-btn depressed color="#9D76C1" class="white--text" small @click="logout">
      <v-icon left small>mdi-logout</v-icon>
      Log Out
    </v-btn>
  </v-app-bar>
</template>

<script>
import { clearToken } from "../utilities/token.js";

export default {
  name: "NavBar",

  props: {
    currentUser: {
      type: Object,
      default: null,
    },
  },

  data() {
    return {
      defaultAvatar:
        "https://images.unsplash.com/5/unsplash-kitsune-4.jpg?ixlib=rb-0.3.5&s=bc01c83c3da0425e9baa6c7a9204af81",
    };
  },

  methods: {
    logout() {
      clearToken();
      this.$router.replace("/login").catch(() => {});
    },
  },
};
</script>