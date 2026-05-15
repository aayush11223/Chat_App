import Vue from 'vue';
import VueRouter from 'vue-router';
import LogIn from '../views/LogIn.vue';
import SignUp from '../views/SignUp.vue';
import ChatPage from '../views/ChatPage.vue';
import { isLoggedIn } from '../utilities/token.js';

Vue.use(VueRouter);

const routes = [
    { path: '/', redirect: '/login' },
    {
        path: '/login',
        name: 'login',
        component: LogIn,
        meta: { requiresGuest: true }
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUp,
        meta: { requiresGuest: true }
    },
    {
        path: '/chatpage/:id?',
        name: 'chatpage',
        component: ChatPage,
        meta: { requiresAuth: true }
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    const authenticated = isLoggedIn();


    if (to.matched.some(record => record.meta.requiresGuest) && authenticated) {
        next('/chatpage/');
    }
    else if (to.matched.some(record => record.meta.requiresAuth) && !authenticated) {
        next('/login');
    }
    else {
        next();
    }
});

export default router;
