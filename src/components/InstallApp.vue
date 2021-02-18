<template>
  <div class="install_app">
    <b-dropdown class="w-75" block no-caret
     toggle-class="install-btn"
     menu-class="w-100 device-menu"
     :text="dropdownText"
    >
      <template #button-content v-if="isSimulator">
        <div data-icon="computer"></div><div>Simulator</div>
      </template>
      <template #button-content v-else>
        <div data-icon="pda-phone"></div><div>USB Device</div>
      </template>
      <b-dropdown-item link-class="device-btn" @click="isSimulator = false">
        <div data-icon="pda-phone"></div><div>USB Device</div>
      </b-dropdown-item>
      <b-dropdown-item link-class="device-btn" @click="isSimulator = true">
        <div data-icon="computer"></div><div>Simulator</div>
      </b-dropdown-item>
    </b-dropdown>
    <b-button class="w-75 install-btn" @click.stop="installApp()">
      <div class="img-icon-container" data-icon>
        <div class="install-btn-icon"></div>
      </div>
      <div>Install App</div>
    </b-button>
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
    }
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

<style scoped>
.install_app {
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #bab8c5;
}
</style>
<style>
.height-60 {
  height: 60px;
}
.border-radius {
  border-radius: 2rem;
}
.install-btn {
  align-items: center;
  background-color: #FFF;
  border: 0;
  border-radius: 2rem;
  color: #000;
  height: 60px;
  display: flex;
  font-family: 'Open Sans';
  font-weight: bold;
  padding: .25rem 1.5rem;
}

.device-btn [data-icon],
.install-btn [data-icon] {
  margin-right: 0.5rem;
}

.install-btn:focus,
.device-btn:focus {
  background-color: #FFF;
  border: 0;
  color: #000;
  box-shadow: unset;
}

.install-btn:hover,
.device-btn:hover {
  background-color: #f5e6ff;
  border: 0;
  color: #000;
}
.show > .install-btn,
.show > .install-btn:active,
.install-btn:active,
.device-btn:active {
  color: #ffffff !important;
  background-color: #6f02b5 !important;
}
.device-menu {
  padding: 0 0;
  background-color: transparent;
  border: 0;
}
.device-btn {
  align-items: center;
  background-color: #FFF;
  border-radius: 2rem;
  color: #000;
  display: flex;
  font-weight: bold;
  height: 60px;
}
li:first-child > a.device-btn {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
li:last-child > a.device-btn {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.img-icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.install-btn-icon {
  width: 28px;
  height: 3rem;
  background-image: url("/img/icons/ic_install_dark.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.install-btn:active .install-btn-icon {
  background-image: url("/img/icons/ic_install_light.svg");
}
</style>
