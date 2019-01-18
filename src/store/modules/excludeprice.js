const state = {
    code : '            unitPriceLessTax: MCR_TRANSACTION_PRICE,'
}

const mutations = {
    exclude (state){
        state.code = '            unitPriceLessTax: 0,'
    },
    doNothing (state){
        state.code = '            unitPriceLessTax: MCR_TRANSACTION_PRICE,'
    }
}

export default {
    state,
    mutations
}