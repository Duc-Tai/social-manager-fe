const siteModule = {
  namespaced: true,
  state: {
    language: "en",
  },
  mutations: {
    setLanguage(state, language) {
      state.language = language;
    },
  },
  actions: {},
};

export default siteModule;
