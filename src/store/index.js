import Vue from 'vue'
import Vuex from 'vuex'
import excludetax from './modules/excludetax'
import excludeprice from './modules/excludeprice'
import mtidnofire from './modules/mtidnofire'
import setdiscount from './modules/setdiscount'
import productnamesku from './modules/productnamesku'
import tgcodeblocks from './modules/tgcodeblocks'
import lscodeblocks from './modules/lscodeblocks'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        excludetax,
        excludeprice,
        mtidnofire,
        setdiscount,
        productnamesku,
        tgcodeblocks,
        lscodeblocks
    }
})