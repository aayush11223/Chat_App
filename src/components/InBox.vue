<template>
  <v-container fluid class="pa-0 ma-0 d-flex flex-column" style="height: 90vh">
    <v-card
      height="180"
      flat
      class="pl-4 d-flex align-center"
      style="
        cursor: pointer;
        border-bottom: 1px solid #e1e1e133;
        background: transparent;
      "
    >
      <v-avatar size="38" class="mr-3" @click="$emit('change-col')">
        <v-img :src="selectedUser.profile" :alt="selectedUser.name" />
      </v-avatar>

      <span class="text-body-2 font-weight-bold white--text">
        {{ selectedUser.name }}
      </span>
    </v-card>
    <!-- Messages -->
    <div
      ref="messageContainer"
      style="overflow-y: auto; flex-grow: 1"
      class="pa-0"
    >
      <div
        v-if="loading"
        class="d-flex justify-center align-center"
        style="height: 100%"
      >
        <v-progress-circular indeterminate color="primary" />
      </div>

      <div
        v-for="(msg, index) in messages"
        :key="msg.id || index"
        :class="[
          msg.senderId === currentUser.id ? 'justify-end' : 'justify-start',
          'd-flex pa-3',
        ]"
      >
        <div
          class="message-bubble py-2 px-3 my-1 mx-3"
          style="border-radius: 8px; max-width: 60%"
          :class="
            msg.senderId === currentUser.id ? 'bubble-sent' : 'bubble-received'
          "
        >
          {{ msg.text }}
        </div>
      </div>
    </div>

    <!-- Input -->
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
          class="ml-16 mt-7"
          @keypress.enter="sendMessage"
          v-model="userInput"
          placeholder="Type something..."
          outlined
          dense
          hide-details
        />
      </v-responsive>
      <v-btn
        @click="sendMessage"
        depressed
        class="ml-12 mt-6"
        fab
        style="border: 1px solid black; width: 40px; height: 40px"
      >
        <v-icon>mdi-send</v-icon>
      </v-btn>
    </v-footer>
  </v-container>
</template>

<script>
import axios from "axios";
import { getSocket } from "../utilities/socket.js";
import { getToken } from "../utilities/token.js";

const API = process.env.VUE_APP_LINK;

export default {
  props: {
    selectedUser: {
      type: Object,
      default: () => ({ name: "", designation: "", profile: "" }),
    },
    currentUser: {
      type: Object,
      default: () => ({ id: "", username: "" }),
    },
  },

  data() {
    return {
      userInput: "",
      messages: [],
      conversationId: null,
      loading: false,
    };
  },

  watch: {
    // When user selects a different person, reload everything
    "selectedUser.id": {
      immediate: true,
      async handler(newId) {
        if (!newId || !this.currentUser?.id) return;
        await this.initConversation();
      },
    },
    "currentUser.id"(newId) {
      if (!newId || !this.selectedUser?.id) return;
      this.initConversation();
    },
  },

  mounted() {
    this.listenForMessages();
  },

  beforeDestroy() {
    // Remove this component's listener (not disconnect — socket is shared)
    const socket = getSocket();
    socket.off("chat message", this.onIncomingMessage);
  },

  methods: {
    async initConversation() {
      this.loading = true;
      this.messages = [];
      this.conversationId = null;

      try {
        // 1. Create or get existing conversation
        const { data } = await axios.post(
          `${API}/api/conversation`,
          { userId: this.currentUser.id, messengerId: this.selectedUser.id },
          { headers: { Authorization: `Bearer ${getToken()}` } }
        );
        this.conversationId = data.conversation.id;

        // 2. Load existing messages
        await this.loadMessages();
      } catch (err) {
        console.error("Failed to init conversation:", err);
      } finally {
        this.loading = false;
      }
    },

    async loadMessages() {
      if (!this.conversationId) return;
      try {
        const { data } = await axios.get(
          `${API}/api/conversation/chat/${this.conversationId}`,
          { headers: { Authorization: `Bearer ${getToken()}` } }
        );
        this.messages = data.messages.map((m) => ({
          id: m.id,
          text: m.content,
          senderId: m.senderId || m.sender?.id,
        }));
        this.$nextTick(() => this.scrollToBottom());
      } catch (err) {
        console.error("Failed to load messages:", err);
      }
    },

    listenForMessages() {
      const socket = getSocket();
      socket.on("chat message", this.onIncomingMessage);
    },

    onIncomingMessage(payload) {
      // Only handle if it belongs to the current open conversation
      if (payload.conversationId !== this.conversationId) return;

      // Avoid duplicate: socket also echoes back to sender
      const alreadyExists = this.messages.some(
        (m) =>
          m.id === payload.id || (payload.tempId && m.tempId === payload.tempId)
      );
      if (alreadyExists) return;

      this.messages.push({
        id: payload.id,
        text: payload.content,
        senderId: payload.sender.id,
        tempId: payload.tempId,
      });
      this.$nextTick(() => this.scrollToBottom());
    },

    sendMessage() {
      if (!this.userInput.trim() || !this.conversationId) return;

      const tempId = `temp-${Date.now()}`;
      const socket = getSocket();

      // Optimistic UI — show immediately
      this.messages.push({
        id: tempId,
        tempId,
        text: this.userInput,
        senderId: this.currentUser.id,
      });

      socket.emit("chat message", {
        content: this.userInput,
        conversationId: this.conversationId,
        receiverId: this.selectedUser.id,
        tempId,
      });

      this.userInput = "";
      this.$nextTick(() => this.scrollToBottom());
    },

    scrollToBottom() {
      const el = this.$refs.messageContainer;
      if (el) el.scrollTop = el.scrollHeight;
    },
  },
};
</script>

   <style scoped>
.bubble-sent {
  background-color: #d1e7dd;
  border-bottom-right-radius: 0 !important;
}
.bubble-received {
  background-color: #f8f9fa;
  border-bottom-left-radius: 0 !important;
  border: 1px solid #e0e0e0;
}
</style>