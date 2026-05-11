import Vue from "vue";
import VueRouter from 'vue-router'
import LogIn from "../views/LogIn.vue"
import SignUp from "../views/SignUp.vue"
import ChatPage from '../views/ChatPage.vue'



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
            path: '/chatpage/:id', component: ChatPage
        }
    ]


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;