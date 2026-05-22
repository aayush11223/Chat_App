import Vue from "vue";
import VueRouter from "vue-router";

import AuthLayout from "../layouts/AuthLayout.vue";
import AppLayout from "../layouts/AppLayout.vue";

import LogIn from "../views/LogIn.vue";
import SignUp from "../views/SignUp.vue";
import ChatPage from "../views/ChatPage.vue";

import { isLoggedIn } from "../utilities/token.js";

Vue.use(VueRouter);

const routes = [
    // Redirect root to login
    { path: "/", redirect: "/login" },

    // Layout 1: Auth pages (no navbar)
    {
        path: "/",
        component: AuthLayout,
        meta: { requiresGuest: true },
        children: [
            {
                path: "login",
                name: "login",
                component: LogIn,
            },
            {
                path: "signup",
                name: "signup",
                component: SignUp,
            },
        ],
    },

    // Layout 2: App pages (with navbar)
    {
        path: "/",
        component: AppLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: "chatpage/:id?",
                name: "chatpage",
                component: ChatPage,
            },
        ],
    },
];

const router = new VueRouter({
    mode: "history",
    routes,
});

router.beforeEach((to, from, next) => {
    const loggedIn = isLoggedIn();

    if (to.matched.some((r) => r.meta.requiresAuth) && !loggedIn) {
        return next("/login");
    }

    if (to.matched.some((r) => r.meta.requiresGuest) && loggedIn) {
        return next("/chatpage");
    }

    next();
});

export default router;