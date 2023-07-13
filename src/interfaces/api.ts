import { AuthApiType } from "@/api/auth";

export interface IApiPlugins {
  authApi: AuthApiType;
}

export enum resource {
  Auth = "auth",
}
