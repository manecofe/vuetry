import { createWebHistory, createRouter } from "vue-router";
import Login from "./components/pages/login.vue";
import register from "./components/pages/register.vue";
import Home from "./components/pages/home.vue";
const routes = [
  { path: "/login", component: Login },
  { path: "/register", component: register },
  { path: "/", component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
