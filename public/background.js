window.browser.browserAction.onClicked.addListener(handleClick);

function handleClick() {
  window.browser.windows.create({
    type: "popup",
    url: "index.html",
  });
}
