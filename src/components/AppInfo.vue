<template>
  <div v-if="focusedApp" class="row">
    <div class="col-3">
      {{focusedApp.name}}
    </div>
    <div class="col-7">
      {{focusedApp.manifest_url}}
    </div>
    <div class="col-2">
      <button @click.stop="uninstallApp(focusedApp.manifest_url)">Uninstall</button>
    </div>
  </div>
  <div v-else class="row">
    <div class="col">Select app...</div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    focusedApp: state => state.apps.focusedApp
  }),
  methods: mapActions('apps', [
    'uninstallApp'
  ]),
  created () {
  }
}
</script>

<style scoped></style>
