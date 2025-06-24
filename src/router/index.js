import { createRouter, createWebHistory } from 'vue-router'
import ProductPage from '@/pages/ProductPage.vue'
// import NotFoundPage from '@/pages/NotFoundPage.vue'
import HomePage from '@/pages/HomePage.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductPage,
  },
  // Catch-all route for undefined paths 必須放最後
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFound',
  //   component: NotFoundPage,
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
