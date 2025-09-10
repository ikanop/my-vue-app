import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/main.vue";
import About from "../pages/about.vue";
import Languages from "../pages/languages.vue";
import Todo from "../pages/todo.vue";
import Switch from "../pages/switch.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/languages", component: Languages },
  { path: "/todo", component: Todo },
  { path: "/switch", component: Switch },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
