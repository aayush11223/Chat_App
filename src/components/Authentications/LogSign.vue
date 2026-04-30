<template>
  <div id="universe_div">
    <div id="page">
      <h2>Log In</h2>
      <b></b>

      <label for="username">Username</label>
      <input class="input" type="text" placeholder="Enter your username" />

      <label for="username">Password</label>
      <input
        class="input"
        type="text"
        placeholder="Enter your password"
      /><b></b>

      <button id="login">Log In</button><b></b>
      <p>Don't have an account. Create one</p>
      <button id="signin">Sign In</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#universe_div {
  width: auto;
  height: 100vh;
  background-image: url("../Images/LoginBackground.jpg");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

#page {
  border: 1px solid white;
  border-radius: 10px;
  height: 455px;
  width: 247px;
  font-family: "Roboto", sans-serif;
  flex-direction: column;
  display: flex;
  justify-content: center;
  gap: 15px;
  padding: 0px 70px;
  color: white;
  background-color: rgba(30, 58, 138, 0.2);
  backdrop-filter: blur(4px) brightness(0.83) contrast(89%);
}

input {
  padding-left: 15px;
}

.input {
  width: 15rem;
  height: 1.75rem;
  border: 1px solid white;
  border-radius: 5px;
}

#login {
  background-color: rgb(10, 10, 141);
  border: none;
  color: white;
  width: 257px;
  height: 30px;
  border-radius: 5px;
}

#login:hover {
  cursor: pointer;
  background-color: rgb(10, 10, 167);
}

p {
  font-size: 0.8rem;
}

#signin {
  background-color: rgb(22, 31, 68);
  border: none;
  color: white;
  width: 257px;
  height: 30px;
  border-radius: 5px;
}

#signin:hover {
  cursor: pointer;
  background-color: rgb(47, 65, 135);
}
</style>