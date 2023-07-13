import pushNotification from "@/config/toastification";
import Vue from "vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import { Constructor } from "vue/types/options";

const options = {
  // You can set your default options here
};

Vue.use(Toast, options);

const toastificationPlugins = {
  install(Vue: Constructor) {
    //@ts-ignore
    Vue.prototype.$pushNotification = pushNotification(Vue.$toast);
  },
};

export default toastificationPlugins;
