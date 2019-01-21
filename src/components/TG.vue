<template>
    <div>
        <ExcludePrice/>
        <MTIDNoFire/>
        <SetMerchantName/>
        <SetVariablesTG/>
<pre>
{{code1}}
{{excludeprice}}
{{code2}}
{{mtidnofire}}
</pre>
        <router-link to="/ResultTG">Submit</router-link>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    import ExcludePrice from './ExcludePrice'
    import MTIDNoFire from './MTIDNoFire'
    import SetMerchantName from './SetMerchantName'
    import SetVariablesTG from './SetVariablesTG'

    export default {
        name: "TG",
        computed: mapState({
            code1: state => state.tgcodeblocks.code1,
            code2: state => state.tgcodeblocks.code2,
            excludeprice: state => state.excludeprice.code,
            mtidnofire: state => state.mtidnofire.code
        }),
        components: {
            SetVariablesTG,
            SetMerchantName,
            ExcludePrice,
            MTIDNoFire
        }
    }
</script>
