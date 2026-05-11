<template>
  <v-container fill-height fluid class="pa-0">
    <div class="box" style="height: 30vh; border-bottom: 1px solid black">
      <div class="pt-3 pl-3 d-flex">
        <v-avatar size="38">
          <v-icon
            class="fa-regular fa-circle-user pt-1 font-weight-bold"
            size="32"
          ></v-icon>
        </v-avatar>
        <h3 class="pt-2 pl-3">Chat</h3>
      </div>

      <div class="mt-6 d-flex ml-4 mr-4">
        <v-text-field
          placeholder="Search"
          prepend-inner-icon="mdi-magnify"
          outlined
          dense
        />
      </div>

      <h3 class="pl-3">Team</h3>
    </div>

    <v-hover v-for="(user, index) in users" :key="index" v-slot="{ hover }">
      <v-card
        @click="handleSelection(user)"
        flat
        class="mx-auto rounded-0 border-bottom card"
        :color="hover ? '#DCDCDC' : 'white'"
        style="
          width: 100%;
          height: 60px;
          cursor: pointer;
          transition: background-color 0.3s;
        "
      >
        <div
          class="d-flex align-center"
          style="
            height: 100%;
            padding: 0 12px;
            gap: 12px;
            border-bottom: 1px solid #dcdcdc;
          "
        >
          <v-avatar size="38">
            <v-img :src="user.profile" :alt="user.name" />
          </v-avatar>

          <div class="d-flex flex-column justify-center">
            <span style="font-size: 14px; font-weight: 600">
              {{ user.name }}
            </span>
            <span style="font-size: 12px; color: #888">
              {{ user.msg }}
            </span>
          </div>
        </div>
      </v-card>
    </v-hover>
  </v-container>
</template>

<script>
export default {
  props: {
    users: Array,
  },

  methods: {
    handleSelection(user) {
      this.$emit("select-user", user);
      this.$router.push(`/chatpage/${user.id}`);
    },
  },
};
</script>

<style scoped>
.box {
  width: 100%;
}
</style>



