browser.browserAction.onClicked.addListener(handleClick);

function handleClick(e) {
  browser.windows.create({
    type: "detached_panel",
    url: "index.html",
    width: 800,
    height: 600
  });
}
