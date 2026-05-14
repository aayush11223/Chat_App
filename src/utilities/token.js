import Cookies from 'js-cookie';

export function setToken(token) {
    Cookies.set('token', token, { expires: 7, path: '/' });
}

export function getToken() {
    return Cookies.get('token');
}

export function clearToken() {
    Cookies.remove('token', { path: '/' });
}

export function isLoggedIn() {
    return !!Cookies.get('token');
}
