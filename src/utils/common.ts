export const languageKey = "language";
export const accessTokenKey = "accessToken";
export const refreshTokenKey = "refreshToken";
export const api =
  process.env.NODE_ENV === "production"
    ? "http://localhost:3000"
    : "http://192.168.1.154:3000";
