import Cookies from "js-cookie";

export function setToken(token) {
    Cookies.set("token", token, { expires: 7, path: "/" });
}
//export the token that has name "token"

export function getToken() {
    return Cookies.get("token");
}
//reads the cookie named token

export function clearToken() {
    Cookies.remove("token", { path: "/" });
}
// { path: "/" } must match the original path used when setting it,
// otherwise cookie may not be removed properly
// This effectively logs the user out.

export function isLoggedIn()
// Exports a helper function to check authentication status.
{
    return !!Cookies.get("token");
}
//so here, it checks, if there exists a cookie name token and !!converts value in boolean, so if token exists -> true