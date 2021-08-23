import { createRouter, createWebHistory } from "vue-router";
import Product from "../views/product/index.vue";
import ProductDetail from "../views/product/Detail.vue";
import Cart from "../views/product/index.vue";
const routes = [
  {
    path: "/",
    name: "Product",
    component: Product,
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
