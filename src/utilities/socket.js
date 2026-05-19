import { io } from "socket.io-client";
import { getToken } from "./token.js";

let socket = null;

export function getSocket() {
    if (!socket) {
        socket = io(process.env.VUE_APP_LINK, {
            auth: { token: getToken() },
        });
    }
    return socket;
}

export function disconnectSocket() {
    if (socket) {
        socket.disconnect();
        socket = null;
    }
}