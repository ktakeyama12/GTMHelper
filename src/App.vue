<template>
    <div id="app">hello
        <ExcludeTax/>
        {{excludetax}}
    </div>
</template>

<script>
    import { mapState } from "vuex";

    import ExcludeTax from './components/ExcludeTax'

    export default {
        name: "App",
        computed: mapState({
            excludetax: state => state.excludetax.code
        }),
        components: {
            ExcludeTax
        }
    };
</script>


