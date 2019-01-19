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
    </div>
</template>

<script>
    import store from '@/store'
    export default {
        name: 'ExcludeTax',
        data: () => ({
            taxcode: null,
            taxoptions: [
                {
                    key: 1,
                    value: 'DoNothing',
                    label: 'Do Nothing',
                    checked: false,
                },
                {
                    key: 2,
                    value: 'ExcludeTax',
                    label: 'Remove Tax',
                    checked: true,
                },
            ],
        }),

        methods: {
            updateTax () {
                if(this.taxcode === 'DoNothing'){
                    store.commit('doNothingTax')
                }else {
                    store.commit('excludeTax')
                }
            }
        }
    }
</script>