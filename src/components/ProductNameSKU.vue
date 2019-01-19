<template>
    <div>
        <h3>Set SKU as product name</h3>
        <div
                v-for="productnameskuoption in productnameskuoptions"
                :key="productnameskuoption.key"
        >
            <label>
                <input
                        type="radio"
                        v-model="productnameskucode"
                        :value="productnameskuoption.value"
                        :checked="productnameskuoption.checked"
                        v-on:change="updateProductNameSKU"
                />
                {{ productnameskuoption.label }}
            </label>
        </div>
        <br />
    </div>
</template>

<script>
    import store from '@/store'
    export default {
        name: 'ExcludeProductNameSKU',
        data: () => ({
            productnameskucode: null,
            productnameskuoptions: [
                {
                    key: 1,
                    value: 'DoNothing',
                    label: 'Do Nothing',
                    checked: false,
                },
                {
                    key: 2,
                    value: 'ExcludeProductNameSKU',
                    label: 'Set SKU as product name',
                    checked: true,
                },
            ],
        }),

        methods: {
            updateProductNameSKU () {
                if(this.productnameskucode === 'DoNothing'){
                    store.commit('doNothingProductNameSKU')
                }else {
                    store.commit('setProductNameSKU')
                }
            }
        }
    }
</script>