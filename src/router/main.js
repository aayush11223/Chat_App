import Vue from "vue";
import VueRouter from 'vue-router'
import LogIn from "../views/LogIn.vue"
import SignUp from "../views/SignUp.vue"
import ChatApp from "../views/ChatApp.vue"



Vue.use(VueRouter)

const routes =
    [
        {
            path: '/', redirect: '/login'
        },
        {
            path: '/login', component: LogIn
        },
        {
            path: '/signup', component: SignUp
        },
        {
            path: '/chatapp', component: ChatApp
        }
    ]


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;