<template>
  <div>
    <div>
      <button @click.stop="installApp()">Install app from directory</button>
      <b-form-checkbox v-model="isSimulator">Connect to simulator</b-form-checkbox>
    </div>
    <!-- Hide since install PWA not working
    <div>
      <input @keyup.enter="installPwaApp($event.target.value)"
             placeholder="Enter to install PWA..." />
    </div>
    -->
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    isSimulator: {
      get () {
        return this.$store.state.apps.isSimulator;
      },
      set (val) {
        this.$store.dispatch('apps/toggleSimulator', val);
        this.$store.dispatch('apps/getAllApps', val);
        this.$store.dispatch('apps/setFocusedApp');
      },
    },
  },
  methods: mapActions('apps', [
    'installApp', 'installPwaApp'
  ]),
  created () {
  },
  data() {
  },
}
</script>
