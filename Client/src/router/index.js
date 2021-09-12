import { createRouter, createWebHistory } from "@ionic/vue-router";
import CategoriesPage from "../pages/CategoriesPage.vue";
import AddNewCookPage from "../pages/AddNewCookPage.vue";
//import CookPage from "../../components/cooks/CookPage.vue";

const routes = [
  {
    path: "/",
    redirect: "/categories",
  },
  {
    path: "/categories",
    component: CategoriesPage,
  },
  {
    path: "/addNewCookPage",
    component: AddNewCookPage,
  },
  {
    path: "/cookPage/:id",
    component: () => import("../../components/cooks/CookPage.vue"),
  },
  {
    path: "/categories/:id",
    component: () => import("../pages/RecepiesCategoryPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
