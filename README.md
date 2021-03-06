# KaiOS DevTool

A lightweight UI to install/uninstall & list apps.

## Requirements

1. Ubuntu (tested with 18.04).
2. Python (tested with 2.7).
3. Firefox (tested with Firefox 84 for KaiOS v3.0).

## Usage

1. If you are a KaiOS employee, you can download the latest artifact from <https://git.kaiostech.com/KaiOS/kaios-devtool-extension/pipelines> then unzip it. If not, follow these steps:
    - Clone this repo then execute `npm install && npm run build`.
    - For MacOS/Windows, please replace executabe `dist\app\appscmd` with the correct one under `dist\app\target.zip\<environment>\appscmd(.exe)`

2. Open a terminal and execute the following shell command to install native messaging app:

    ```sh
    cd dist
    bash app\install_native_app.sh
    ```

    For Windows please make sure that python is installed already then execute following steps:
    - Rename `message_host_win.json` to replace `message_host.json`
    - replace `%~dp0` inside `install_native_app.bat` and `message_host.bat` to valid path
    - execute `install_native_app.bat`

3. Make sure the KaiOS device is connected with `adb root`.

4. Open Firefox matching your KaiOS release (eg. Firefox 84 for KaiOS 3.0) & open `about:debugging`.

5. Click `This Firefox` on top left.

6. Title `Temporary Extensions`, click `Load Temporary Add-on`, choose `manifest.json`.

7. Click terminal icon on toolbar.

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
