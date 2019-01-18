<template>
    <div>
        <h3>Set discountcode to 'DISCOUNT'</h3>
        <div
                v-for="discountcodeoption in discountcodeoptions"
                :key="discountcodeoption.key"
        >
            <label>
                <input
                        type="checkbox"
                        v-model="discountcodecode"
                        :value="discountcodeoption.value"
                        :checked="discountcodeoption.checked"
                        v-on:change="updateDiscountCode"
                />
                {{ discountcodeoption.label }}
            </label>
        </div>
        <br />
        <!--<h3>Checked: {{ discountcodecode }}</h3>-->
    </div>
</template>

<script>
    export default {
        name: 'discountcode',

        data: () => ({
            code:   '  if (discountAmount>0) {\n' +
                '        var discount = \'DISCOUNT\';\n' +
                '    } else {\n' +
                '        var discount = \'\';\n' +
                '    }\n',
            discountcodecode: null,

            discountcodeoptions: [
                {
                    key: 1,
                    value: '',
                    label: 'Set discount code to "DISCOUNT"',
                    checked: false,
                },
            ],
        }),

        methods: {
            updateDiscountCode (event) {
                if(this.discountcodecode === true){
                    this.$emit('clicked', this.code)
                }else{
                    this.$emit('clicked', '')
                }

            }
        }
    }
</script>