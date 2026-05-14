<template>
  <div
    id="universe_div"
    class="d-flex justify-center align-center"
    style="height: 100vh; width: 100%"
  >
    <v-card
      style="
        border-radius: 10px;
        width: 387px;
        color: white;
        background-color: rgba(30, 58, 138, 0.2);
        backdrop-filter: blur(4px) brightness(0.83) contrast(89%);
      "
      id="page"
      class="d-flex flex-column justify-center pa-10"
      dark
      flat
      height="500"
    >
      <h2 class="mb-4 white--text">Log In</h2>
      <br />

      <v-text-field
        v-model="username"
        autocomplete="off"
        placeholder="Enter your username"
        dense
        class="mb-1"
      />

      <v-text-field
        v-model="password"
        autocomplete="new-password"
        placeholder="Enter your password"
        type="password"
        dense
        class="mb-4"
      />

      <v-btn
        id="login-btn"
        block
        style="
          background-color: rgb(10, 10, 141);
          color: white;
          border: none;
          height: 1px;
        "
        @click="login"
      >
        Log In
      </v-btn>

      <br />

      <p
        class="text-center mb-3"
        style="font-size: 0.8rem; color: white; align-self: center"
      >
        Don't have an account? Create one
      </p>

      <router-link to="/signup" class="text-decoration-none mb-2">
        <v-btn
          id="signup-btn"
          block
          style="
            background-color: rgb(0, 31, 68);
            color: white;
            border: none;
            height: 42px;
          "
        >
          Sign Up
        </v-btn>
      </router-link>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
import { setToken } from "../utilities/token.js";

const API = process.env.VUE_APP_LINK;

export default {
  name: "LogIn",
  data() {
    return {
      username: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    async login() {
      if (!this.username || !this.password) {
        alert("Please fill all fields");
        return;
      }
      this.loading = true;
      try {
        const { data } = await axios.post(`${API}/api/auth/login`, {
          usernameOrEmail: this.username,
          password: this.password,
        });

        console.log("Login response:", data);
        setToken(data.token);
        this.username = "";
        this.password = "";
        this.$router.push("/chatpage/1");
      } catch (err) {
        const msg =
          err.response?.data?.message || "Invalid username or password";
        alert(msg);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
<style scoped>
#universe_div {
  background-image: url("../assets/LoginBackground.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

#page {
  font-family: "Roboto", sans-serif;
}
</style>