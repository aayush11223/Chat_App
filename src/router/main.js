import Vue from "vue";
import VueRouter from 'vue-router'
import LogIn from "../views/LogIn.vue"
import SignIn from "../views/SignIn.vue"


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
            path: '/signin', component: SignIn
        }
    ]


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;