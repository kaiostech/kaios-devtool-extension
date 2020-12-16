import appsCmd from '../../api/appsCmd';

const APPSCMD = window.navigator.platform.startsWith('Win')
                ? 'appscmd.exe' : './appscmd';

const simulatorSocket = function (isSimulator) {
  return isSimulator ? '--socket=/tmp/apps_service_uds.sock' : '';
}

const state = () => ({
  all: [],
  focusedApp: null,
  isSimulator: false,
  getAllApps: `${APPSCMD} -j ${simulatorSocket()} list`,
  installApp: `${APPSCMD} ${simulatorSocket()} choose-install-folder`,
  installPwaApp: `${APPSCMD} ${simulatorSocket()} install-pwa`,
  uninstallApp: `${APPSCMD} ${simulatorSocket()} uninstall`,
})

const getters = {}

const actions = {
  getAllApps ({ state, commit }) {
    appsCmd.listApps(state.getAllApps).then(apps => {commit('setApps', apps)});
  },
  installApp({ state, commit }) {
    appsCmd.installApp(state.installApp).then(() => {
      appsCmd.listApps(state.getAllApps).then(apps => {commit('setApps', apps)});
    });
  },
  installPwaApp({ state, commit }, url) {
    appsCmd.installPwaApp(state.installPwaApp, url).then(() => {
      appsCmd.listApps(state.getAllApps).then(apps => {commit('setApps', apps)})
    });
  },
  uninstallApp({ state, commit }, manifest_url) {
    appsCmd.uninstallApp(state.uninstallApp, manifest_url).then(() => {
      appsCmd.listApps(state.getAllApps).then(apps => {
        commit('setApps', apps);
        if (state.focusedApp.manifest_url === manifest_url) {
          commit('setFocusedApp', null);
        }
      })
    });
  },
  setFocusedApp({ commit }, app) {
    commit('setFocusedApp', app);
  },
  toggleSimulator ({ commit }, val) {
    commit('updateStatus', val);
  },
}

const mutations = {
  setApps (state, apps) {
    state.all = apps;
  },
  setFocusedApp (state, app) {
    state.focusedApp = app;
  },
  updateStatus (state, val) {
    console.log('toggleSimulator');
    state.isSimulator = val;
    state.getAllApps = `${APPSCMD} -j ${simulatorSocket(state.isSimulator)} list`;
    state.installApp = `${APPSCMD} ${simulatorSocket(state.isSimulator)} choose-install-folder`
    state.installPwaApp = `${APPSCMD} ${simulatorSocket(state.isSimulator)} install-pwa`
    state.uninstallApp = `${APPSCMD} ${simulatorSocket(state.isSimulator)} uninstall`
    console.log('toggleSimulator finished');
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
