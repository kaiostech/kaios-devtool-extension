<template>
  <div id="app">
    <AppList />
  </div>
</template>

<script>
import AppList from './components/AppList.vue'

export default {
  name: 'App',
  components: {
    AppList
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
  margin-top: 60px;
}
</style>
