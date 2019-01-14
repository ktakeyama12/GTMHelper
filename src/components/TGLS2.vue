<template>
    <div id="tgls2">
        <form @submit.prevent="onSubmit">
            <div class="form-item">
                <vue-input label="Input" name="input" v-model="form.input"></vue-input>
                - {{ form.input }}
            </div>
            <div class="form-item">
                <vue-radio name="radio1" :value="TG" v-model="form.radio1">2</vue-radio>
                <vue-radio name="radio1" :value="LS" v-model="form.radio1">2</vue-radio>
                - {{ form.radio1 }}
            </div>
            <div class="form-item">
                <button type="submit">送信</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'app',

        data: () => ({
            form: {
                input: 'test',
                radio1: 1,
                radio2: 1,
                check: 1,
                select: 3
            },
            options: [
                { id: 1, value: 'option1' },
                { id: 2, value: 'option2' },
                { id: 3, value: 'option3' },
                { id: 4, value: 'option4' }
            ]
        }),

        methods: {
            onSubmit () {
                console.log('送信')
            }
        }
    }
</script>