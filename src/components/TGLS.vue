<template>
    <div>
        <h3>TG or LS tag</h3>
        <div
                v-for="tglsoption in tglsoptions"
                :key="tglsoption.key"
        >
            <label>
                <input
                        type="radio"
                        v-model="tglscode"
                        :value="tglsoption.value"
                        :checked="tglsoption.checked"
                        v-on:change="updateValue"
                />
                {{ tglsoption.label }}
            </label>
        </div>
        <h3>Checked: {{ tglscode }}</h3>

        <h3>discountType</h3>
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
                        v-on:change="updateValue"
                />
                {{ discountoption.label }}
            </label>
        </div>
        <h3>Checked: {{ discountcode }}</h3>
    </div>
</template>

<script>
    export default {
        name: 'tgls',

        data: () => ({
            tglscode: null,
            tglsoptions: [
                {
                    key: 1,
                    value: 'trafficGateConfig',
                    label: 'TG',
                    checked: false,
                },
                {
                    key: 2,
                    value: 'affiliateConfig',
                    label: 'LS',
                    checked: true,
                },
            ],
            discountcode: null,
            discountoptions: [
                {
                    key: 3,
                    value: 'item',
                    label: 'item',
                    checked: false,
                },
                {
                    key: 4,
                    value: 'order',
                    label: 'order',
                    checked: true,
                },
            ],
        }),

        methods: {
            updateValue (event) {
                this.$emit('clicked', this.tglscode + ": {ranMID: 'XXX', discountType: '" + this.discountcode + "'},")
            }
        }
    }
</script>