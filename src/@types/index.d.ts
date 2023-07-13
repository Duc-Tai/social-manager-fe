import { IApiPlugins } from "@/interfaces/api";
import { Store } from "vuex";
import ToastInterface from "vue-toastification/dist/types/src/ts/interface";
import PushNotificationType from "@/config/toastification";
import IUtilsType from "@/plugins/utils";

declare module "vue/types/vue" {
  interface Vue {
    $api: IApiPlugins;
    $store: Store<any>;
    $toast: ReturnType<typeof ToastInterface>;
    $pushNotification: PushNotificationType;
    $utils: IUtilsType;
  }
}

declare module "vuex/types/index" {
  // this.$myInjectedFunction inside Vuex stores
  interface Store<S> {
    $api: IApiPlugins;
    $store: Store<any>;
    $toast: ReturnType<typeof ToastInterface>;
    $pushNotification: PushNotificationType;
    $utils: IUtilsType;
  }
}
