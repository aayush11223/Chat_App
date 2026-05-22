<template>
  <div
    id="universe_div"
    class="d-flex justify-center align-center"
    style="height: 100vh; width: 100%"
  >
    <v-card
      id="page"
      style="
        border-radius: 10px;
        color: white;
        background-color: rgba(30, 58, 138, 0.2);
        backdrop-filter: blur(4px) brightness(0.83) contrast(89%);
      "
      class="d-flex flex-column justify-center pa-10"
      dark
      flat
      height="500"
      :width="$vuetify.breakpoint.xs ? '90%' : '387px'"
    >
      <h2 class="mb-4 white--text">Sign Up</h2>
      <br />

      <v-text-field
        v-model="username"
        autocomplete="off"
        placeholder="Enter your username"
        dense
        class="mb-1"
      />

      <v-text-field
        v-model="email"
        autocomplete="off"
        placeholder="Enter your email"
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
        id="signup-btn"
        block
        height="42px"
        style="
          background-color: rgb(22, 31, 68);
          color: white;
          border: none;
          flex: 0 0 auto;
        "
        @click="signup"
      >
        Sign Up
      </v-btn>

      <br />

      <p
        class="text-center mb-3"
        style="font-size: 0.8rem; color: white; align-self: center"
      >
        Already have an account?
      </p>

      <router-link to="/login" class="text-decoration-none mb-2">
        <v-btn
          id="login-btn"
          block
          height="42px"
          style="background-color: rgb(10, 10, 141); color: white; border: none"
        >
          Log In
        </v-btn>
      </router-link>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";

const API = process.env.VUE_APP_LINK;

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      loading: false,
    };
  },
  methods: {
    signup() {
      if (!this.username || !this.email || !this.password) {
        alert("Please fill all fields");
        return;
      }

      this.loading = true;

      axios
        .post(`${API}/api/auth/register`, {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.username = "";
          this.email = "";
          this.password = "";
          alert("Registration successful");
          this.$router.push("/login");
        })
        .catch((err) => {
          const msg =
            err.response?.data?.error ||
            err.response?.data?.message ||
            JSON.stringify(err.response?.data) ||
            "Registration failed";
          alert(msg);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
#universe_div {
  background-image: url("../assets/signup.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

#page {
  font-family: "Roboto", sans-serif;
}

#signup-btn:hover {
  background-color: rgb(47, 65, 135);
}
</style>