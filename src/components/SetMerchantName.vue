<template>
    <div>
        <textarea v-model="merchantname" placeholder="Merchant Name" @input="updateName"></textarea>
    </div>
</template>

<script>
    export default {
        name: "SetMerchantName",
        data: function(){
            return {
                merchantname: '',
            }
        },
        methods: {
            updateName (e) {
                this.$store.commit('updateName', e.target.value)
            }
        }

    }
</script>