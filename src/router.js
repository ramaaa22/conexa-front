import Vue from "vue";
import VueRouter from 'vue-router'
import Posts from "./components/Posts.vue"


Vue.use(VueRouter)

const routes = [
    {
        path: "/posts",
        name: "posts",
        component: Posts
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;