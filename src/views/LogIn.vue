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
        label="Username"
        placeholder="Enter your username"
        dense
        class="mb-1"
      />

      <v-text-field
        v-model="password"
        label="Password"
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
export default {
  name: "LogIn",
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    login() {
      if (!this.username || !this.password) {
        alert("Please fill all fields");
        return;
      }
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        this.username === storedUser.username &&
        this.password === storedUser.password
      ) {
        localStorage.setItem("isLoggedIn", true);

        if (localStorage.getItem("isLoggedIn")) {
          this.$router.push("/chatpage/1");
        }
      } else {
        alert("Invalid username or password");
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