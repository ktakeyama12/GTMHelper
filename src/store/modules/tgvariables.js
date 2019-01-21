const state = {
    merchantname : '',
    mcrtransactionid : '',
    mcrprice : ''
}

const mutations = {
    updateName (state, payload){
        state.merchantname = payload
    },
    updateMCRTransactionID (state, payload){
        state.mcrtransactionid = payload
    },
    updateMCRPrice (state, payload){
        state.mcrprice = payload
    }
}

export default{
    state,
    mutations
}