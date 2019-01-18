import Vue from 'vue'
import Vuex from 'vuex'
import excludetax from './modules/excludetax'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        excludetax
    }
})