import Vue from 'vue';
import VueRouter from 'vue-router';

import LogIn from '../views/LogIn.vue';
import SignUp from '../views/SignUp.vue';
import ChatPage from '../views/ChatPage.vue';

import auth from '../middleware/auth';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/login'
    },

    {
        path: '/login',
        name: 'login',
        component: LogIn
    },

    {
        path: '/signup',
        name: 'signup',
        component: SignUp
    },

    {
        path: '/chatpage/:id',
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
    auth({ next, to });
});

export default router;