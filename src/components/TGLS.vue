<template>
    <div>
        <h1>Radio List</h1>
        <div
                v-for="item in items"
                :key="item.key"
        >
            <label>
                <input
                        type="radio"
                        v-model="picked"
                        :value="item.value"
                        :checked="item.checked"
                        v-on:change="updateValue"
                />
                {{ item.label }}
            </label>
        </div>
        <h3>Checked: {{ picked }}</h3>
    </div>
</template>

<script>
    export default {
        name: 'tgls',

        data: () => ({
            picked: null,
            items: [
                {
                    key: 1,
                    value: 'TG',
                    label: 'TG',
                    checked: false,
                },
                {
                    key: 2,
                    value: 'LS',
                    label: 'LS',
                    checked: true,
                },
            ],
        }),

        methods: {
            updateValue (event) {
                this.$emit('clicked', this.picked)
            }
        }
    }
</script>