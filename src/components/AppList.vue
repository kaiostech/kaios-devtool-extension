<template>
  <ul>
    <li v-for="app in apps" :key="app.manifest">
      {{ app.name }}
      <br>
      <button
        @click="uninstallApp(app)">
        Uninstall
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    apps: state => state.apps.all
  }),
  methods: mapActions('apps', [
    'uninstallApp'
  ]),
  created () {
    this.$store.dispatch('apps/getAllApps')
  }
}
</script>
