<template>
    <div>
        <ExcludeTax/>
        <GetDataLayer/>
        <pre>
            {{code1}}
            {{excludetax}}
            {{code2}}
        </pre>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import ExcludeTax from './ExcludeTax'
    import GetDataLayer from './GetDataLayer'

    export default {
        name: "TG",
        computed: mapState({
            excludetax: state => state.excludetax.code,
            code1: state => state.lscodeblocks.code1,
            code2: state => state.lscodeblocks.code2
        }),
        components: {
            ExcludeTax,
            GetDataLayer
        }
    }
</script>