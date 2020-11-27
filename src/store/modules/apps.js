import appsCmd from '../../api/appsCmd'

const state = () => ({
  all: [],
  focusedApp: null
})

const getters = {}

const actions = {
  getAllApps ({ commit }) {
    appsCmd.listApps().then(apps => {commit('setApps', apps)});
  },
  installApp() {
    // XXX: can't get lastest app info after appsCmd.installApp()
    // delay 2 seconds to see if better
    appsCmd.installApp().then(() => {
      const when = Date.now() + 2000;
      window.browser.alarms.create('updateApps', { when });
    });
  },
  installPwaApp({ commit }, url) {
    appsCmd.installPwaApp(url).then(
      appsCmd.listApps().then(apps => {commit('setApps', apps)}));
  },
  uninstallApp({ state, commit }, manifest_url) {
    appsCmd.uninstallApp(manifest_url).then(
      appsCmd.listApps().then(apps => {
        commit('setApps', apps)
        if (state.focusedApp.manifest_url === manifest_url) {
          commit('setFocusedApp', null);
        }
      }));
  },
  setFocusedApp({ commit }, app) {
    commit('setFocusedApp', app);
  }
}

const mutations = {
  setApps (state, apps) {
    state.all = apps;
  },
  setFocusedApp (state, app) {
    state.focusedApp = app;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
