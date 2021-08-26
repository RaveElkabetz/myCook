import { createRouter, createWebHistory } from "@ionic/vue-router";
import CategoriesPage from "../pages/CategoriesPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/categories",
  },
  {
    path: "/categories",
    component: CategoriesPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
