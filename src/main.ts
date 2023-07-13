import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//@ts-ignore
import store from "./store";
import apiPlugin from "./plugins/api";
import utilsPlugin from "./plugins/utils";
import toastificationPlugins from "./plugins/toastification";
import i18n from "./i18n";
import "./globalCss";
import "./index";

Vue.use(apiPlugin);
Vue.use(utilsPlugin, {
  store,
  router,
});
Vue.use(toastificationPlugins);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
