const appList = document.getElementById("app_list");
const installAppBtn = document.getElementById('install_app');

function onResponse(response) {
  const parsedJSON = JSON.parse(response);
  appList.classList.add('hide_content');
  while (appList.firstChild) {
    appList.removeChild(appList.lastChild);
  }
  Array.from(parsedJSON).forEach((app) => {
    // console.log(app);
    const div = document.createElement('div');
    const name = document.createElement('div');
    name.textContent = app.name;
    // const installState = document.createElement('div');
    // installState.textContent = app.install_state;
    const deleteBtn = document.createElement('button');
    deleteBtn.dataset.action = 'DELETEAPP';
    deleteBtn.dataset.manifest = app.manifest_url || '';
    deleteBtn.textContent = 'delete';
    div.appendChild(name).appendChild(deleteBtn);
    appList.appendChild(div);
  });
  appList.classList.remove('hide_content');
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function listAllApps() {
  console.log('listAllApps');
  // execute 'list' appscmd
  const sending = browser.runtime.sendNativeMessage(
    "ping_pong",
    {action: 'list'});
  sending.then(onResponse, onError);
}

function installApp() {
  // execute 'install' appscmd
}

function uninstallApp(manifest) {
  console.log('uninstallApp', manifest);
  if (!manifest) return;
  const sending = browser.runtime.sendNativeMessage(
    "ping_pong",
    {action: 'uninstall', manifest});
  sending.then((res) => {
    console.log(`Response::uninstallApp::${manifest}`, res);
    listAllApps();
  }, onError);

  // execute 'uninstall' appscmd
}

function chooseAppManifestFromFileExplorer() {

}

// XXX: Should check device connect state first
listAllApps();

window.addEventListener('click', (e) => {
  const action = e.target.dataset.action || '';
  switch (action) {
    case 'DELETEAPP':
      uninstallApp(e.target.dataset.manifest || '');
  }
});

installAppBtn.addEventListener('click', () => {
  const sending = browser.runtime.sendNativeMessage(
    "ping_pong",
    {action: 'install'});
  sending.then((response) => {
    console.log('response', response);
    listAllApps();
  }, (error) => {
    console.error(new Error(error));
  });
});

