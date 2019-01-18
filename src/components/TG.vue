<template>
    <div>
        <pre>
            {{code1}}
        </pre>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import ExcludeTax from './ExcludeTax'

    export default {
        name: "TG",
        computed: mapState({
            code1: state => state.tgcodeblocks.code1
        }),
        components: {

        }
    }
</script>
