import axios from "axios";
//@ts-ignore
import store from "@/store";
import router from "../../router";
import { accessTokenKey } from "@/utils/common";

let token = localStorage.getItem(accessTokenKey) || "";
if (token != null) {
  axios.defaults.headers.common.Accept = "application/json";
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const instance = axios.create({
  baseURL: process.env.VUE_APP_BETA_API,
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    store.dispatch("auth/logout");
    const code = parseInt(error.response && error.response.status);
    if (code === 401) {
      router.push("/auth/login");
    } else if (code === 403) {
      try {
        const newToken = await store.dispatch("renewAccessToken", {
          store,
        });
        if (newToken) {
          const originalRequest = error.config;
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return axios(originalRequest);
        } else {
          store.dispatch("auth/logout");
          router.push("/auth/login");
        }
      } catch (error) {}
    } else if (code == 409) {
      router.push("/");
    }
    throw error;
  }
);
