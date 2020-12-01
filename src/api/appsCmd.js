const sendNativeMessage = window.browser.runtime.sendNativeMessage;
const NATIVEAPP = "message_host";
const SHELL_CMD = Object.freeze({
  LIST: "./appscmd -j list",
  INSTALL: "./appscmd choose-install-folder",
  INSTALL_PWA: "./appscmd install-pwa",
  UNINSTALL: "./appscmd uninstall"
});

export default {
  // app structure
  // {
  //   "name":"calculator",
  //   "install_state":"Installed",
  //   "manifest_url":"http://calculator.localhost/manifest.webapp",
  //   "status":"Enabled",
  //   "update_state":"Idle",
  //   "update_url":"",
  //   "allowed_auto_download":false
  // }
  listApps: () => {
    const action = SHELL_CMD.LIST;
    return sendNativeMessage(NATIVEAPP, {action}).then((response) => {
      try {
        const list = JSON.parse(response);
        console.log(`list.length::${Array.from(list).length}`)
        return list;
      } catch(e) {
        console.error(new Error(e));
        return [];
      }
    }, (reason) => {
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

  uninstallApp: (manifest_url) => {
    if (!manifest_url) return Promise.reject('No App manifest provided...');
    const action = `${SHELL_CMD.UNINSTALL} "${manifest_url}"`;
    return sendNativeMessage(NATIVEAPP, {action}).then((response) => {
      return response;
    }, (reason) => {
      console.error(new Error(reason));
    });
  },
}
