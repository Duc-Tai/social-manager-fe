import DefaultNotification from "@/components/Toast/Notifiy/index.vue";
import SuccessNotification from "@/components/Toast/Success/index.vue";
import ErrorNotification from "@/components/Toast/Error/index.vue";
import ToastInterface from "vue-toastification/dist/types/src/ts/interface";
import { POSITION } from "vue-toastification";

const pushNotification = (toast?: ReturnType<typeof ToastInterface>) => {
  return {
    // successNotify: (text: string, title: string, type: string) => {
    //     toast && toast({
    //         component: SuccessNotify,
    //         props: {
    //             title,
    //             description: text,
    //             type,
    //         },
    //     }, {
    //         toastClassName: "custom-toast-container",
    //         position: POSITION.BOTTOM_RIGHT
    //     })
    // },
    notify: (text: string, icon?: string) => {
      toast &&
        toast(
          {
            component: DefaultNotification,
            props: {
              description: text,
            },
          },
          {
            toastClassName: "custom-toast-container",
            position: POSITION.BOTTOM_RIGHT,
            hideProgressBar: true,
            icon: {
              iconClass: `mdi ` + `${icon ? `${icon}` : "mdi-information"}`, // Optional
              iconTag: "span", // Optional
            },
          }
        );
    },
    success: (text: string, icon?: string) => {
      toast &&
        toast(
          {
            component: SuccessNotification,
            props: {
              description: text,
            },
          },
          {
            toastClassName: "custom-toast-container",
            position: POSITION.BOTTOM_RIGHT,
            hideProgressBar: true,
            icon: {
              iconClass: `mdi ` + `${icon ? `${icon}` : "mdi-check-circle"}`, // Optional
              iconTag: "span", // Optional
            },
          }
        );
    },
    error: (text: string, icon?: string) => {
      toast &&
        toast(
          {
            component: ErrorNotification,
            props: {
              description: text,
            },
          },
          {
            toastClassName: "custom-toast-container",
            position: POSITION.BOTTOM_RIGHT,
            hideProgressBar: true,
            icon: {
              iconClass: `mdi ` + `${icon ? `${icon}` : "mdi-alert"}`, // Optional
              iconTag: "span", // Optional
            },
          }
        );
    },
  };
};

export default pushNotification;
export type PushNotificationType = ReturnType<typeof pushNotification>;
