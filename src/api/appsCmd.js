const sendNativeMessage = window.browser.runtime.sendNativeMessage;
const NATIVEAPP = "ping_pong";
const SHELL_CMD = Object.freeze({
  LIST: "./appscmd -j list",
  INSTALL: "./appscmd choose-install-folder",
  INSTALL_PWA: "./appscmd install-pwa",
  UNINSTALL: "./appscmd uninstall"
});

export default {
  listApps: () => {
    const action = SHELL_CMD.LIST;
    return sendNativeMessage(NATIVEAPP, {action}).then((response) => {
      console.log('response', response);
      try {
        return JSON.parse(response);
      } catch(e) {
        console.error(new Error(e));
        return [];
      }
    }, (reason) =>{
      console.error(new Error(reason));
      return [];
    });
  },

  installApp: () => {
    const action = SHELL_CMD.INSTALL;
    return sendNativeMessage(NATIVEAPP, {action}).then((response) => {
      return response;
    }, (reason) => {
      console.error(new Error(reason));
    });
  },

  installPwaApp: (url) => {
    if (!url) return Promise.reject('No PWA URL provided...');
    const action = `${SHELL_CMD.INSTALL_PWA} "${url}"`;
    return sendNativeMessage(NATIVEAPP, {action}).then((response) => {
      return response;
    }, (reason) => {
      console.error(new Error(reason));
    });
  },

  uninstallApp: (manifest) => {
    if (!manifest) return Promise.reject('No App manifest provided...');
    const action = `${SHELL_CMD.UNINSTALL} "${manifest}"`;
    return sendNativeMessage(NATIVEAPP, {action}).then((response) => {
      return response;
    }, (reason) => {
      console.error(new Error(reason));
    });
  },
}
