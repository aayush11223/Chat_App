<template>
  <v-container
    fluid
    class="pa-0 ma-0 d-flex justify-center align-center"
    style="height: 80vh"
  >
    <div class="d-flex flex-column align-center justify-center">
      <div class="mb-4">
        <v-avatar size="80">
          <v-img :src="selectedUser.profile" :alt="selectedUser.name" />
        </v-avatar>
      </div>

      <div class="d-flex flex-column align-center text-center white--text">
        <span style="font-size: 20px; font-weight: 600">{{
          selectedUser.name
        }}</span>
        <span style="font-size: 20px; color: #e1e1e180">{{
          selectedUser.designation
        }}</span>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    selectedUser: Object,
  },
};
</script>

<style scoped>
</style>