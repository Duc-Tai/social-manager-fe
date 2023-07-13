const authModule = {
  namespaced: true,
  state: {
    accessToken: "",
    refreshToken: "",
    userInfo: "",
  },
  mutations: {
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken;
    },
    setAuthenticate(state, { accessToken, refreshToken, userInfo }) {
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.userInfo = userInfo;
    },
  },
  actions: {
    login: ({ commit }, { ctx, body }) => {},
    register: ({ commit }, { ctx, body }) => {},
    logout: ({ commit }) => {
      console.log("Vào logout");
      const accessToken = null;
      const refreshToken = null;
      const userInfo = null;
      commit("setAuthenticate", { accessToken, refreshToken, userInfo });
    },
    renewAccessToken: ({ commit }) => {
      commit("setAccessToken", { accessToken });
    },
  },
};

export default authModule;
