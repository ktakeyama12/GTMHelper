const state = {
    code : '        unitPriceLessTax: MCR_TRANSACTION_PRICE,'
}

const mutations = {
    excludePrice (state){
        state.code = '        unitPriceLessTax: 0,'
    },
    doNothingPrice (state){
        state.code = '        unitPriceLessTax: MCR_TRANSACTION_PRICE,'
    }
}

export default {
    state,
    mutations
}