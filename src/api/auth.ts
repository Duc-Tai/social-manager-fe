import axios from "axios";
import { resource } from "@/interfaces/api";
import {
  ICreateNewPassword,
  IForgotPassword,
  ILogin,
  IRegister,
} from "@/interfaces/auth";
/* eslint-disable */
const authApi = () => ({
  login: (body: ILogin) => {
    return axios.post(`${resource.Auth}/login`, body);
  },
  register: (body: IRegister) => {
    return axios.post(`${resource.Auth}/register`, body);
  },
  forgotPassword: (body: IForgotPassword) => {
    return axios.post(`${resource.Auth}/forgot-password`, body);
  },
  resetPassword: (body: ICreateNewPassword) => {
    return axios.post(`${resource.Auth}/renew-password`, body);
  },
});

export default authApi;
export type AuthApiType = ReturnType<typeof authApi>;
