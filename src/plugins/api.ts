import { Constructor } from "vue/types/options";
import authApi from "@/api/auth";

const apiPlugin = {
  install(Vue: Constructor) {
    const factories = {
      authApi: authApi(),
    };
    // Add an instance method
    Vue.prototype.$api = factories;
  },
};

export default apiPlugin;
