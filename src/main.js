import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import App from './App.vue'
import store from './store'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// XXX: This is due to we can't get the latest app list
//      right after we just installed a new app
window.browser.alarms.onAlarm.addListener((e) => {
  switch (e.name) {
    case 'updateApps':
      store.dispatch('apps/getAllApps');
      break;
  }
});

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
