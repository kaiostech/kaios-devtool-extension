<template>
  <div>
    <div>
      <button @click.stop="installApp()">Install app from directory</button>
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
  methods: mapActions('apps', [
    'installApp', 'installPwaApp'
  ]),
  created () {
  }
}
</script>
