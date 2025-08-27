import {createRouter, createWebHistory} from 'vue-router'

import Main from "../pages/main.vue";
import Secondary from "../pages/secondary.vue";

const routes = [
    { path: "/", component: Main },
    { path: "/secondary", component: Secondary }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;