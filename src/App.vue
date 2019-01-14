<template>
    <div class="a">
    <Tgls @clicked="updateValue"/>
    </div>
</template>

<script>
    import Tgls from './components/TGLS'

    export default{
        name: 'App',
        components: {
            Tgls
        },
        methods: {
            updateValue (value) {
                console.log(value)
            }
        }
    }
</script>