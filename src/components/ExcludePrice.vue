<template>
    <div>
        <h3>Set unitPriceLessTax as Price</h3>
        <div
                v-for="priceoption in priceoptions"
                :key="priceoption.key"
        >
            <label>
                <input
                        type="radio"
                        v-model="pricecode"
                        :value="priceoption.value"
                        :checked="priceoption.checked"
                        v-on:change="updatePrice"
                />
                {{ priceoption.label }}
            </label>
        </div>
        <br />
    </div>
</template>

<script>
    import store from '@/store'
    export default {
        name: 'ExcludePrice',
        data: () => ({
            pricecode: null,
            priceoptions: [
                {
                    key: 1,
                    value: 'DoNothing',
                    label: 'Set unitPriceLessTax as Price',
                    checked: false,
                },
                {
                    key: 2,
                    value: 'ExcludePrice',
                    label: 'Set price to 1',
                    checked: true,
                },
            ],
        }),

        methods: {
            updatePrice () {
                if(this.pricecode === 'DoNothing'){
                    store.commit('doNothing')
                }else {
                    store.commit('exclude')
                }
            }
        }
    }
</script>