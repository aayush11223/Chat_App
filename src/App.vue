<template>
  <div id="app">
    <ParentComponent />
  </div>
</template>

<script>
import ParentComponent from "./components/ParentComponent.vue";
export default {
  name: "App",
  components: {
    ParentComponent,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  margin: 0;
  padding: 0;
}
</style>

