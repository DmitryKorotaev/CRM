import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "login",
    meta: { layout: "empty" },
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/Categories",
    name: "Categories",
    meta: { layout: "main" },
    component: () => import("@/views/Categories.vue"),
  },
  {
    path: "/Detail-record",
    name: "Detail-record",
    meta: { layout: "main" },
    component: () => import("@/views/Detail-record.vue"),
  },
  {
    path: "/History",
    name: "History",
    meta: { layout: "main" },
    component: () => import("@/views/History.vue"),
  },
  {
    path: "/",
    name: "Home",
    meta: { layout: "main" },
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/Planning",
    name: "Planning",
    meta: { layout: "main" },
    component: () => import("@/views/Planning.vue"),
  },
  {
    path: "/Profile",
    name: "Profile",
    meta: { layout: "main" },
    component: () => import("@/views/Profile.vue"),
  },
  {
    path: "/Record",
    name: "Record",
    meta: { layout: "main" },
    component: () => import("@/views/Record.vue"),
  },
  {
    path: "/Register",
    name: "Register",
    meta: { layout: "empty" },
    component: () => import("@/views/Register.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
