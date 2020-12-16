const sendNativeMessage = window.browser.runtime.sendNativeMessage;
const NATIVEAPP = "message_host";

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
  listApps: (action) => {
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

  installApp: (action) => {
    return sendNativeMessage(NATIVEAPP, {action}).then((response) => {
      return response;
    }, (reason) => {
      console.error(new Error(reason));
    });
  },

  installPwaApp: (cmd, url) => {
    if (!url) return Promise.reject('No PWA URL provided...');
    const action = `${cmd} "${url}"`;
    return sendNativeMessage(NATIVEAPP, {action}).then((response) => {
      return response;
    }, (reason) => {
      console.error(new Error(reason));
    });
  },

  uninstallApp: (cmd, manifest_url) => {
    if (!manifest_url) return Promise.reject('No App manifest provided...');
    const action = `${cmd} "${manifest_url}"`;
    return sendNativeMessage(NATIVEAPP, {action}).then((response) => {
      return response;
    }, (reason) => {
      console.error(new Error(reason));
    });
  },
}
