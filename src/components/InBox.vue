<template>
  <v-container fluid class="pa-0 ma-0" style="width: 100%">
    <v-card
      flat
      class="mx-auto rounded-0 mb-10"
      style="width: 100%; height: 80px; cursor: pointer; overflow"
    >
      <div
        class="d-flex align-center px-3"
        style="height: 100%; gap: 12px; border-bottom: 1px solid #dcdcdc"
      >
        <v-avatar size="38" @click="$emit('change-col')">
          <v-img :src="selectedUser.profile" :alt="selectedUser.name" />
        </v-avatar>

        <div class="d-flex flex-column justify-center">
          <span style="font-size: 14px; font-weight: 600">{{
            selectedUser.name
          }}</span>
          <span style="font-size: 12px; color: #888"
            >{{ selectedUser.designation }}
          </span>
        </div>
      </div>
    </v-card>

    <v-main style="height: 60vh; overflow-y: auto">
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="d-flex justify-end pa-3"
      >
        <div
          class="py-3 px-3"
          style="
            background: #1976d2;
            color: white;
            border-radius: 12px;
            max-width: 300px;
          "
        >
          {{ message.text }}
        </div>
      </div>
    </v-main>
    <v-footer
      style="border-top: 1px solid black; height: none; background-color: white"
    >
      <v-responsive max-width="80%">
        <v-text-field
          @keypress.enter="sendMessage"
          v-model="userInput"
          placeholder="Type something..."
          outlined
          dense
          hide-details
          class="ml-8 mt-5"
        ></v-text-field>
      </v-responsive>

      <v-btn
        @click="sendMessage"
        depressed
        class="ml-8 mt-5"
        fab
        style="border: 1px solid black; width: 40px; height: 40px"
      >
        <v-icon>mdi-send</v-icon>
      </v-btn>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      userInput: "",
      messages: [],
    };
  },

  props: {
    selectedUser: Object,
  },

  methods: {
    sendMessage() {
      if (!this.userInput.trim()) return;

      this.messages.push({
        text: this.userInput,
      });

      this.userInput = "";
    },
  },
};
</script>

<style scoped>
</style>