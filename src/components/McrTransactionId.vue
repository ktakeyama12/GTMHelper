<template>
    <div>
        <h3>Exclude mcrtransactionid</h3>
        <div
                v-for="mcrtransactionidoption in mcrtransactionidoptions"
                :key="mcrtransactionidoption.key"
        >
            <label>
                <input
                        type="checkbox"
                        v-model="mcrtransactionidcode"
                        :value="mcrtransactionidoption.value"
                        :checked="mcrtransactionidoption.checked"
                        v-on:change="updateMcrTransactionId"
                />
                {{ mcrtransactionidoption.label }}
            </label>
        </div>
        <br />
        <!--<h3>Checked: {{ mcrtransactionidcode }}</h3>-->
    </div>
</template>

<script>
    export default {
        name: 'mcrtransactionid',

        data: () => ({
            code: '  if (typeof MCR_TRANSACTION_ID === "undefined" || MCR_TRANSACTION_ID == \'\') {\n' +
                '        rm_trans.trafficgateConfig.allowCommission = \'false\';\n' +
        '    },',
            mcrtransactionidcode: null,

        mcrtransactionidoptions: [
                {
                    key: 1,
                    value: '        var unit_price_less_mcrtransactionid = unit_price',
                    label: "Don't fire if order id is blank",
                    checked: false,
                },
            ],
        }),

        methods: {
            updateMcrTransactionId (event) {
                if(this.mcrtransactionidcode === true){
                    this.$emit('clicked', this.code)
                }else{
                    this.$emit('clicked', '')
                }

            }
        }
    }
</script>