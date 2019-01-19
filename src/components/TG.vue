<template>
    <div>
        <ExcludePrice/>
        <MTIDNoFire/>
<pre>
{{code1}}
{{excludeprice}}
{{code2}}
{{mtidnofire}}
</pre>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import ExcludePrice from './ExcludePrice'
    import MTIDNoFire from './MTIDNoFire'

    export default {
        name: "TG",
        computed: mapState({
            code1: state => state.tgcodeblocks.code1,
            code2: state => state.tgcodeblocks.code2,
            excludeprice: state => state.excludeprice.code,
            mtidnofire: state => state.mtidnofire.code
        }),
        components: {
            ExcludePrice,
            MTIDNoFire
        }
    }
</script>
