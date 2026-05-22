<template>
  <v-container fluid class="pa-0">
    <div class="w-100" style="height: 30vh; border-bottom: 1px solid #e1e1e133">
      <div class="d-flex justify-space-between">
        <div class="pt-3 pl-3 d-flex">
          <v-avatar size="38">
            <v-icon
              class="fa-regular fa-circle-user pt-1 font-weight-bold white--text"
              size="32"
            ></v-icon>
          </v-avatar>
          <h3 class="pt-2 pl-3 white--text">Chat</h3>
        </div>
      </div>

      <v-text-field
        class="mt-6 d-flex ml-4 mr-4"
        placeholder="Search"
        prepend-inner-icon="mdi-magnify"
        dense
        hide-details
        dark
        color="white"
      />

      <h3 class="pl-3 ml-1 mt-12 white--text">Team</h3>
    </div>

    <v-hover v-for="(user, index) in users" :key="index" v-slot="{ hover }">
      <v-list
        @click="handleSelection(user)"
        flat
        class="mx-auto rounded-0"
        :color="hover ? '#FFFFFF1A' : 'transparent'"
        style="cursor: pointer; transition: background-color 0.3s"
      >
        <v-list-item>
          <v-list-item-avatar class="mt-4">
            <v-img :src="user.profile" :alt="user.name" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="white--text mt-1">
              {{ user.name }}
            </v-list-item-title>

            <v-list-item-subtitle class="white--text">
              {{ user.msg }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-hover>
  </v-container>
</template>

<script>
export default {
  name: "SideBar",

  props: {
    users: Array,
  },

  methods: {
    handleSelection(user) {
      this.$emit("select-user", user);
      this.$router.push(`/chatpage/${user.id}`).catch((err) => {
        if (err.name !== "NavigationDuplicated") {
          console.error(err);
        }
      });
    },
  },
};
</script>