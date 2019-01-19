const state = {
    code1 : `    var product_name        = MCR_TRANSACTION_PRODUCTS[i].name;`,
}

const mutations = {
    doNothingProductNameSKU (state){
        state.code1 = `    var product_name        = MCR_TRANSACTION_PRODUCTS[i].name;`
    },
    setProductNameSKU (state){
        state.code1 = `    var product_name        = sku;`
    }
}

export default {
    state,
    mutations
}