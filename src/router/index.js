import ProductPage from "@/pages/ProductPage.vue";
import { createRouter, createWebHistory } from "vue-router";
// import NotFoundPage from '@/pages/NotFoundPage.vue'
import HomePage from "@/pages/HomePage.vue";
import PromotionsPage from "@/pages/PromotionsPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";
import DownloadPage from "../pages/DownloadPage.vue";
import AccountPage from "../pages/AccountPage.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/products",
    name: "Products",
    component: ProductPage,
  },
  {
    path: "/promotions",
    name: "Promotions",
    component: PromotionsPage,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
  },
  {
    path: "/download",
    name: "Download",
    component: DownloadPage,
  },
  {
    path: "/account",
    name: "Account",
    component: AccountPage,
  },
  // Catch-all route for undefined paths 必須放最後
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFound',
  //   component: NotFoundPage,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
