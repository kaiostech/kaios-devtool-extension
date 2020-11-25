import appsCmd from '../../api/appsCmd'

const state = () => ({
  all: []
})

const getters = {}

const actions = {
  getAllApps ({ commit }) {
    console.log('appsCmd', appsCmd);
    console.log('appsCmd.listApps', appsCmd.listApps);
    appsCmd.listApps().then(apps => {commit('setApps', apps)});
  },
  installApp({ commit }) {
    appsCmd.installApp().then(
      appsCmd.listApps().then(apps => {commit('setApps', apps)}));
  },
  installPwaApp({ commit }, url) {
    appsCmd.installPwaApp(url).then(
      appsCmd.listApps().then(apps => {commit('setApps', apps)}));
  },
  uninstallApp({ commit }, app) {
    appsCmd.uninstallApp(app.manifest).then(
      appsCmd.listApps().then(apps => {commit('setApps', apps)}));
  }
}

const mutations = {
  setApps (state, apps) {
    state.all = apps
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
