const state = {
    code : '    var unit_price_less_tax = unit_price'
}

const mutations = {
    excludeTax (state){
        state.code = '    var unit_price_less_tax = Math.floor(unit_price / 108 * 100);\''
    },
    doNothingTax (state){
        state.code = '    var unit_price_less_tax = unit_price'
    }
}

export default {
    state,
    mutations
}