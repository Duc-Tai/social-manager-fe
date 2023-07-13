import Vue from "vue";
//@ts-ignore
import enMessage from "../locales/en.json";
//@ts-ignore
import viMessage from "../locales/vi.json";
import { languageKey } from "./common";

export const apiErrorHandler = (error: any, ctx: Vue) => {
  try {
    const language = localStorage.getItem(languageKey);
    if (error?.response?.data?.message) {
      const message = error.response.data.message;
      if (message === "UNKNOW_ERROR") {
        return ctx.$pushNotification.error(`An error has occurred`);
      }
      if (language === "vi") {
        //@ts-ignore
        return ctx.$pushNotification.error(viMessage.responseMessage[message]);
      } else {
        //@ts-ignore
        return ctx.$pushNotification.error(enMessage.responseMessage[message]);
      }
    } else {
      return ctx.$pushNotification.error(`An error has occurred`);
    }
  } catch (error) {
    console.log("error :>> ", error);
    return ctx.$pushNotification.error(`An error has occurred`);
  }
};

export const redirectPage = (href: string) => {
  window.location.href = `${window.location.origin}${href}`;
};
