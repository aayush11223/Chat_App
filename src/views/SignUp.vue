<template>
  <div id="universe_div" class="d-flex justify-center align-center">
    <v-card
      id="page"
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

      <router-link to="/signup" class="text-decoration-none mb-2">
        <v-btn id="signup-btn" block> sign up </v-btn>
      </router-link>
      <br />

      <p class="text-center mb-3">Already have an account</p>

      <router-link to="/login" class="text-decoration-none mb-2">
        <v-btn id="signup-btn" block> log in </v-btn>
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
};
</script>

<style scoped>
#universe_div {
  height: 100vh;
  width: 100%;
  background-image: url("../assets/signup.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

#page {
  border-radius: 10px;
  width: 387px;
  font-family: "Roboto", sans-serif;
  color: white;
  background-color: rgba(30, 58, 138, 0.2);
  backdrop-filter: blur(4px) brightness(0.83) contrast(89%);
}

#login-btn {
  background-color: rgb(10, 10, 141);
  color: white;
  border: none;
}

#login-btn:hover {
  background-color: rgb(10, 10, 167);
}

#signup-btn {
  background-color: rgb(22, 31, 68);
  color: white;
  border: none;
}

#signup-btn:hover {
  background-color: rgb(47, 65, 135);
}

p {
  font-size: 0.8rem;
  color: white;
  align-self: center;
}
</style>