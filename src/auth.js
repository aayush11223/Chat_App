// src/auth.js
let token = null;

export function setToken(t) {
    token = t;
}

export function getToken() {
    return token;
}

export function clearToken() {
    token = null;
}

export function isLoggedIn() {
    return !!token;
}