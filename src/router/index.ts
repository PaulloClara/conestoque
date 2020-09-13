import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import store from "@/store";

import Login from "@/views/home/Login.vue";
import DefaultLayout from "@/layouts/Default.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: DefaultLayout,
    beforeEnter(to, from, next) {
      if (store.getters.isActiveSession) {
        router.replace({ name: "dashboard" });
      } else {
        next();
      }
    },
    children: [
      {
        path: "/login",
        alias: ["/"],
        name: "login",
        component: Login
      },
      {
        path: "/register",
        name: "register",
        component() {
          return import("@/views/home/Register.vue");
        }
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
