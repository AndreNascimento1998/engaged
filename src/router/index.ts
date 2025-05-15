import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/views/HomePage/Index.vue"),
  },
  {
    path: "/character/:id",
    name: "CharacterPage",
    component: () => import("@/views/InformationCharacter/Index.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
