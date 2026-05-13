<template>
  <v-container
    fluid
    class="pa-0 ma-0 d-flex flex-column"
    style="height: 100vh; width: 100%"
  >
    <v-card
      flat
      class="mx-auto rounded-0"
      style="width: 100%; height: 80px; cursor: pointer; flex-shrink: 0"
    >
      <div
        class="d-flex align-center px-3"
        style="height: 100%; gap: 12px; border-bottom: 1px solid #dcdcdc"
      >
        <v-avatar size="38" @click="$emit('change-col')">
          <v-img :src="selectedUser?.profile" :alt="selectedUser.name" />
        </v-avatar>

        <div class="d-flex flex-column justify-center">
          <span style="font-size: 14px; font-weight: 600">{{
            selectedUser?.name
          }}</span>
          <span style="font-size: 12px; color: #888">{{
            selectedUser?.designation
          }}</span>
        </div>
      </div>
    </v-card>

    <div style="height: 60vh; overflow-y: auto" class="pa-0 flex-grow-1">
      <div
        v-for="(msg, index) in messages"
        :key="index"
        :class="[
          'message-row',
          msg.senderId === currentUserId ? 'justify-end' : 'justify-start',
          'd-flex pa-3',
        ]"
      >
        <div class="message-bubble">
          {{ msg.text }}
        </div>
      </div>
    </div>

    <v-footer
      class="d-flex align-center px-4"
      style="
        border-top: 1px solid #dcdcdc;
        height: 80px;
        background-color: white;
        flex-shrink: 0;
      "
    >
      <v-responsive max-width="80%">
        <v-text-field
          @keypress.enter="sendMessage"
          v-model="userInput"
          placeholder="Type something..."
          outlined
          dense
          hide-details
        ></v-text-field>
      </v-responsive>

      <v-btn
        @click="sendMessage"
        depressed
        class="ml-4"
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
  name: "ChatComponent",

  props: {
    selectedUser: {
      type: Object,
      default: () => ({ name: "", designation: "", profile: "" }),
    },
  },

  data() {
    return {
      userInput: "",
      currentUserId: 1,
      messages: [
        { text: "Hello", senderId: 2 },
        { text: "Hi there!", senderId: 1 },
      ],
    };
  },

  methods: {
    sendMessage() {
      if (!this.userInput.trim()) return;

      this.messages.push({
        text: this.userInput,
        senderId: this.currentUserId,
      });

      this.userInput = "";
    },
  },
};
</script>

<style scoped>
.message-row {
  display: flex;
  width: 100%;
}

.justify-end {
  justify-content: flex-end;
}

.justify-start {
  justify-content: flex-start;
}

.message-bubble {
  padding: 8px 12px;
  border-radius: 8px;
  max-width: 60%;
  margin: 4px 12px;
}

.justify-end .message-bubble {
  background-color: #d1e7dd;
  border-bottom-right-radius: 0;
}

.justify-start .message-bubble {
  background-color: #f8f9fa;
  border-bottom-left-radius: 0;
  border: 1px solid #e0e0e0;
}
</style>
