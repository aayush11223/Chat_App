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
        width: 387px;
        color: white;
        background-color: rgba(30, 58, 138, 0.2);
        backdrop-filter: blur(4px) brightness(0.83) contrast(89%);
      "
      class="d-flex flex-column justify-center pa-10"
      dark
      flat
      height="500"
    >
      <h2 class="mb-4 white--text">Sign Up</h2>
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
        id="signup-btn"
        block
        style="
          background-color: rgb(10, 10, 141);
          color: white;
          border: none;
          height: 1px;
          background-color: rgb(22, 31, 68);
          color: white;
          border: none;
        "
        @click="signup"
      >
        sign up
      </v-btn>
      <br />

      <p
        class="text-center mb-3"
        style="
          font-size: 0.8rem;
          color: white;
          align-self: center;
          height: 10px;
        "
      >
        Already have an account
      </p>

      <router-link to="/login" class="text-decoration-none mb-2">
        <v-btn
          id="login-btn"
          block
          style="
            background-color: rgb(10, 10, 141);
            color: white;
            border: none;
            height: 42px;
          "
        >
          log in
        </v-btn>
      </router-link>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    signup() {
      if (!this.username || !this.password) {
        alert("Please fill all fields");
        return;
      }
      const userData = {
        username: this.username,
        password: this.password,
      };

      localStorage.setItem("user", JSON.stringify(userData));

      this.$router.push("/login");
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