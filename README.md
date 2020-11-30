# KaiOS DevTool

For now, this is a lightway UI to install/uninstall & list apps.

## Requirements

1. Ubuntu (tested with 18.04)
2. Python (tested with 2.7)
3. Firefox nightly tested with 84.0b4

## Usage

1. clone this repo run `npm install && npm run build` or download artifact(under development).
   `bash install_native_app.sh` to install native app.

2. Make sure KaiOS device connected with `adb root`, seems appscmd crashes without this.
   Also appscmd & message_host.py must have `x` permission.

3. Open firefox nightly & go to page `about:debugging`

4. Click `This Firefox` on top left

5. Title `Temporary Extensions`, click `Load Temporary Add-on`, choose `manifest.json`.

6. Click "K" icon on toolbar.

## Snapshot

 For now the UI is really simple...
<img alt="" src="kaios_devtool.png" style="max-width:50vh">

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
