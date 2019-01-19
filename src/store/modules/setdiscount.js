const state = {
    code : ''
}

const mutations = {
    setDiscount (state){
        state.code = `var discountCode = '';
if (discountAmount > 0) {
    discountCode = 'DISCOUNT';
}
`
    },
    doNothing (state){
        state.code = ''
    }
}

export default {
    state,
    mutations
}