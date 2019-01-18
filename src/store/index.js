import Vue from 'vue'
import Vuex from 'vuex'
import excludetax from './modules/excludetax'
import tgcodeblocks from './modules/tgcodeblocks'
import lscodeblocks from './modules/lscodeblocks'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        excludetax,
        tgcodeblocks,
        lscodeblocks
    }
})