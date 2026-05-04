<template>
  <div>
    <NavBarVue />
    <MainPart />
  </div>
</template>

<script>
import NavBarVue from "../components/NavBar.vue";
import MainPart from "../components/MainPart.vue";
export default {
  components: {
    NavBarVue,
    MainPart,
  },
};
</script>

<style lang="scss" scoped>
</style>