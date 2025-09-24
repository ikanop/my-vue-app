import {createRouter, createWebHistory} from "vue-router";

import Home from "../views/main.vue";
import About from "../views/about.vue";
import Languages from "../views/languages.vue";
import Todo from "../views/todo.vue";
import Switch from "../views/switch.vue";

const routes = [
  {path: "/", component: Home},
  {path: "/about", component: About},
  {path: "/languages", component: Languages},
  {path: "/todo", component: Todo},
  {path: "/switch", component: Switch},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;