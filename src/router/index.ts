import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import Home from "@/views/Home.vue";
import DefaultPage from "@/layouts/Default.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: DefaultPage,
    children: [
      {
        path: "/",
        component: Home,
        alias: ["/home"]
      },
      {
        path: "/",
        component: Home,
        alias: ["/home"]
      }
    ]
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component() {
      return import("@/layouts/Dashboard.vue");
    },
    redirect: { name: "products" },
    children: [
      {
        path: "/dashboard/products",
        name: "products",
        component() {
          return import("@/views/product/Listing.vue");
        }
      },
      {
        path: "/dashboard/products/register",
        name: "register-products",
        component() {
          return import("@/views/product/Register.vue");
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
