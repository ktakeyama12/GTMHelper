<template>
    <div>
        <h3>Exclude Tax</h3>
        <div
                v-for="taxoption in taxoptions"
                :key="taxoption.key"
        >
            <label>
                <input
                        type="radio"
                        v-model="taxcode"
                        :value="taxoption.value"
                        :checked="taxoption.checked"
                        v-on:change="updateTax"
                />
                {{ taxoption.label }}
            </label>
        </div>
        <br />
        <!--<h3>Checked: {{ taxcode }}</h3>-->
    </div>
</template>

<script>
    export default {
        name: 'tax',

        data: () => ({
            taxcode: null,
            taxoptions: [
                {
                    key: 1,
                    value: '        var unit_price_less_tax = unit_price',
                    label: 'Do Nothing',
                    checked: false,
                },
                {
                    key: 2,
                    value: '      var unit_price_less_tax = Math.floor(unit_price / 108 * 100);',
                    label: 'Remove Tax',
                    checked: true,
                },
            ],
        }),

        methods: {
            updateTax (event) {
                this.$emit('clicked', this.taxcode)
            }
        }
    }
</script>