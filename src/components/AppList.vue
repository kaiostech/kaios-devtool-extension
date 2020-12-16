<template>
  <div>
    <div v-for="app in apps" @click.stop="setFocusedApp(app)"
         class="row app"  :key="app.manifest_url">
      <div class="col">{{ app.name }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    apps: state => state.apps.all
  }),
  methods: mapActions('apps', [
    'setFocusedApp'
  ]),
  created () {
    this.$store.dispatch('apps/getAllApps');
  }
}
</script>

<style>
.app {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.app:hover {
  background-color: lightskyblue;
}
</style>
