const state = {
    code : '      var unit_price_less_tax = unit_price'
}

const mutations = {
    exclude (state){
        state.code = '      var unit_price_less_tax = Math.floor(unit_price / 108 * 100);\''
    },
    doNothing (state){
        state.code = '        var unit_price_less_tax = unit_price'
    }
}

export default {
    state,
    mutations
}