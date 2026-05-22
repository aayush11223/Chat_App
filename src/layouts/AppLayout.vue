<template >
  <v-app>
    <NavBar :currentUser="currentUser" />
    <v-main>
      <router-view :currentUser="currentUser" />
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import NavBar from "../components/NavBar.vue";
import { getToken, isLoggedIn } from "../utilities/token.js";
import { getSocket } from "../utilities/socket.js";

const API = process.env.VUE_APP_LINK;

export default {
  name: "AppLayout",

  components: { NavBar },

  data() {
    return {
      currentUser: null,
    };
  },

  created() {
    if (!isLoggedIn()) {
      this.$router.push("/login");
      return;
    }

    axios
      .get(`${API}/api/session`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      .then((res) => {
        this.currentUser = res.data.user;
        getSocket();
      })
      .catch(() => {
        this.$router.push("/login");
      });
  },
};
</script>

