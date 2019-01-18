const state = {
    code : ''
}

const mutations = {
    nofire (state){
        state.code = `if (typeof MCR_TRANSACTION_ID === "undefined" || MCR_TRANSACTION_ID == '') {
            rm_trans.trafficGateConfig.allowCommission = 'false';
        }`
    },
    doNothing (state){
        state.code = ''
    }
}

export default {
    state,
    mutations
}