import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { accessTokenKey } from "@/utils/common";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import ErrorLayout from "@/layouts/ErrorLayout.vue";
Vue.component("default-layout", DefaultLayout);
Vue.component("auth-layout", AuthLayout);
Vue.component("error-layout", ErrorLayout);
Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // requiresAuth: true,
  {
    path: "/home",
    name: "home",
    component: () => import("@/components/Home/index.vue"),
    meta: { layout: "default" },
  },
  {
    path: "/auth/login",
    name: "login",
    component: () => import("@/views/auth/login/index.vue"),
    meta: { layout: "auth" },
  },
  {
    path: "/auth/register",
    name: "register",
    component: () => import("@/views/auth/register/index.vue"),
    meta: { layout: "auth" },
  },
  // redirect: "/"
  { path: "/:pathMatch(.*)*", meta: { layout: "error" } },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  let token = localStorage.getItem(accessTokenKey) || "";
  if (requiresAuth && !token) {
    next("/auth/login");
  } else {
    next();
  }
});

export default router;
