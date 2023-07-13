import that from "vue";
import { Constructor } from "vue/types/options";

export const utils = () => ({
  formatDate() {
    return "YYYY-MM-DD";
  },
});

const utilsPlugin = {
  install(Vue: Constructor, { router, store }: { router: any; store: any }) {
    // console.log("router :>> ", router);
    // console.log("store :>> ", store);
    // Add an instance method
    Vue.prototype.$utils = utils();
  },
};

export default utilsPlugin;
export type IUtilsType = ReturnType<typeof utils>;
