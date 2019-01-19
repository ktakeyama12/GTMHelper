<template>
    <div>
        <h3>Set discountCode to DISCOUNT</h3>
        <div
                v-for="discountoption in discountoptions"
                :key="discountoption.key"
        >
            <label>
                <input
                        type="radio"
                        v-model="discountcode"
                        :value="discountoption.value"
                        :checked="discountoption.checked"
                        v-on:change="updateDiscount"
                />
                {{ discountoption.label }}
            </label>
        </div>
        <br />
    </div>
</template>

<script>
    import store from '@/store'
    export default {
        name: 'ExcludeDiscount',
        data: () => ({
            discountcode: null,
            discountoptions: [
                {
                    key: 1,
                    value: 'DoNothing',
                    label: 'Do Nothing',
                    checked: false,
                },
                {
                    key: 2,
                    value: 'ExcludeDiscount',
                    label: 'Set discountCode to DISCOUNT',
                    checked: true,
                },
            ],
        }),

        methods: {
            updateDiscount () {
                if(this.discountcode === 'DoNothing'){
                    store.commit('doNothing')
                }else {
                    store.commit('setDiscount')
                }
            }
        }
    }
</script>