<template>
  <div class="app_list">
    <div class="app_list_header">MY APPS</div>
    <div v-for="app in apps" @click.stop="setFocusedApp(app)"
         class="app" :key="app.manifest_url"
    >
      <div class="app_info">
        <div class="app_icon" data-icon="rocket"></div>
        <div class="app_name">{{ app.name }}</div>
      </div>
      <b-button class="delete_app" variant=""
        @click.stop="uninstallApp(app.manifest_url)"
        data-icon="delete"
      ></b-button>
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
    'setFocusedApp',
    'uninstallApp'
  ]),
  created () {
    this.$store.dispatch('apps/getAllApps');
  }
}
</script>

<style scoped>
.app {
  padding: 0 1rem;
  display: flex;
  flex-direction: row;
  font-weight: 600;
  justify-content: space-between;
}

.app:hover {
  background-color: #f5e6ff;
}

.app:hover > .delete_app {
  display: flex;
}

.app:hover > .delete_app:active,
.app:hover > .delete_app:focus {
  color: #fff;
  background-color: #6f02b5;
  box-shadow: unset;
}

.app_icon {
  margin-right: 0.5rem;
}

.app_info {
  display: flex;
}

.app_list {
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
}

.app_list_header {
  padding: 0 1rem;
  height: 2rem;
  line-height: 2rem;
  color: #6a6a6a;
  text-transform: uppercase;
  font-weight: bold;
}

.app_icon,
.app_name,
.delete_app {
  align-items: center;
  display: flex;
  height: 60px;
}

.delete_app {
  background-color: #f5e6ff;
  border: 0;
  color: #000000;
  display: none;
  padding: 0 0;
  font-size: 2rem;
  box-shadow: unset;
}

</style>
