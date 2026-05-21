import Vue from "vue";
import VueRouter from "vue-router";

import LogIn from "../views/LogIn.vue";
import SignUp from "../views/SignUp.vue";
import ChatPage from "../views/ChatPage.vue";

import { isLoggedIn } from "../utilities/token.js";

Vue.use(VueRouter);

const routes = [
    { path: "/", redirect: "/login" },

    {
        path: "/login",
        name: "login",
        component: LogIn,
        meta: { requiresGuest: true }, //meta is used ot add custome properties in route

        //  Only allow users who are NOT logged in”
        // If logged in, they should not access login page.
    },

    {
        path: "/signup",
        name: "signup",
        component: SignUp,
        meta: { requiresGuest: true },
    },

    {
        path: "/chatpage/:id?",
        name: "chatpage",
        component: ChatPage,
        meta: { requiresAuth: true },
    },
    // This route requires authentication
    // Only logged-in users can access it
];

const router = new VueRouter({
    mode: "history",
    routes,
});

router.beforeEach((to, from, next) => {
    const loggedIn = isLoggedIn();

    if (to.meta.requiresAuth && !loggedIn) {
        return next("/login");
    }
    // If route requires authentication AND user is NOT logged in
    // redirect to /login

    if (to.meta.requiresGuest && loggedIn) {
        return next("/chatpage");
        // If route is only for guests (login/signup) AND user IS logged in
        // redirect to chat page
    }

    next();
});

export default router;