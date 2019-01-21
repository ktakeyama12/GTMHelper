<template>
    <div>
        <textarea v-model="mcrtransactionid" placeholder="Variable Name for TransactionID" @input="updateMCRTransactionID"></textarea>
        <textarea v-model="mcrprice" placeholder="Variable Name for Price" @input="updateMCRPrice"></textarea>
    </div>
</template>

<script>
    export default {
        name: "SetVariablesTG",
        data: function(){
            return {
                mcrtransactionid: '',
                mcrprice: ''
            }
        },
        methods: {
            updateMCRTransactionID (e) {
                this.$store.commit('updateMCRTransactionID', e.target.value)
            },
            updateMCRPrice(e) {
                this.$store.commit('updateMCRPrice', e.target.value)
            }
        }

    }
</script>