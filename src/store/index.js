import Vue from 'vue'
import Vuex from 'vuex'
import apps from './modules/apps'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    apps,
  },
  strict: debug,
})
