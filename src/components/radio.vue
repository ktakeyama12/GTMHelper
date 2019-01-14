<template>
    <label>
        <span v-if="$slots.label"><slot name="label"></slot></span>
        <span v-else-if="label">{{ label }}</span>
        <input type="radio"
               :name="name"
               :value="value"
               :checked="checked === value"
               @change="updateValue"
               @focus="$emit('focus', $event)"
               @blur="$emit('blur', $event)"
        >
        <slot></slot>
    </label>
</template>
<script>
    export default {
        model: {
            prop: 'checked',
            event: 'input'
        },

        props: {
            value: {},
            checked: {},
            label: { type: String },
            name: { type: String, require: true }
        },

        methods: {
            updateValue (e) {
                this.$emit('input', this.value)
                this.$emit('checked', this.value)
            }
        }
    }
</script>