<template>
  <div id="app">
    <div class="left">
      <InstallApp class="install_app" />
      <AppList class="app_list container" />
    </div>
    <div class="right container">
      <AppInfo />
      <div style="display: flex;align-items: center;justify-content: center;"><!-- temp style code -->
        <h1>Under Construction...</h1>
      </div>
    </div>
  </div>
</template>

<script>
import AppInfo from './components/AppInfo.vue'
import AppList from './components/AppList.vue'
import InstallApp from './components/InstallApp.vue'

export default {
  name: 'App',
  components: {
    AppInfo,
    AppList,
    InstallApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  display: flex;
}

.left {
  flex: 0 0 25%;
  max-height: 100vh;
  display: block;
  overflow-x: hidden;
  overflow-y: scroll;
}

.right {
  flex: 0 0 75%;
  max-width: 75%;
}

.install_app {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
