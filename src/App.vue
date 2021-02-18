<template>
  <div id="app">
    <InstallApp />
    <AppList />
  </div>
</template>

<script>
import AppList from './components/AppList.vue'
import InstallApp from './components/InstallApp.vue'

export default {
  name: 'App',
  components: {
    AppList,
    InstallApp
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
