import { io } from "socket.io-client";
import { getToken } from "./token.js";

let socket = null;
// Creates a variable to store the socket instance.
// Initially null because:
// no connection exists yet

export function getSocket() {
    if (!socket) {
        socket = io(process.env.VUE_APP_LINK, {
            // Creates a new Socket.IO connection using io()
            // process.env.VUE_APP_LINK is your backend URL

            auth: { token: getToken() },
            // Sends authentication data during connection, backend must know who is connecting, so we send token
        });
    }
    return socket;
    // Token is sent to backend with socket
}

export function disconnectSocket() {
    if (socket) {
        socket.disconnect();
        socket = null;
    }
    // no more message receiving/sending
    // server knows user is offline
}