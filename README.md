# KaiOS DevTool

For now, this is a lightway UI to install/uninstall & list apps.

## Requirements

 1. Clone this repo to your local.
 2. Ubuntu (tested on 18.04)
 3. Python (tested on 2.7)
 4. Firefox nightly tested with 18.04
 5. Install native app
    * copy `app/ping_pong.json` to correct manifest location
    You'll need to copy apps/ping_pong.json to specific path to enable native messaging feature.
    On Ubuntu it's `~/.mozilla/native-messaging-hosts/ping_pong.json`
    Check appendix [2] for detail
    * Replace `path` to the correct path to access `ping_pong.py`. Be noticed the `appcmd` need to be in the same directory.

## Usage

 1. Make sure KaiOS device connected with `adb root`, seems appscmd crashes without this.
    Also appscmd & ping_pong.py must have `x` permission.
 2. Open firefox nightly & go to page `about:debugging`
 3. Click `This Firefox` on top left
 4. Title `Temporary Extensions`, click `Load Temporary Add-on`
 5. Choose `manifest.json` where you just cloned.
 6. Click "K" icon on toolbar.

## Snapshot

 For now the UI is really simple...
<img alt="" src="kaios_devtool.png" style="max-width:50%">

## Appendix

 [1] Native Messaging
 <https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_messaging>
 [2] Native Manifest
 <https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Native_manifests>

## Project setup

### Requirement

* node.js v12.20.0
* npm 6.14.8

### Install dependency

```sh
npm install
```

### Compiles and hot-reloads for development

```sh
npm run serve
```

### Compiles and minifies for production

```sh
npm run build
```

### Lints and fixes files

```sh
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
