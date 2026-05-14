export default function auth({ next, to }) {
    const isAuthenticated = document.cookie.includes("jwt");

    // Protect private routes
    if (!isAuthenticated && to.meta.requiresAuth) {
        return next({ name: 'login' });
    }

    return next();
}