<template>
    <div>
<pre>
{{result1}}{{mcrtransactionidblock}}{{mcrtransactionid}}

{{mcrpriceblock}}{{mcrprice}}
{{result2}}
{{merchantname}}{{result3}}{{merchantname}}{{result4}}
{{code1}}
{{excludeprice}}
{{code2}}
{{mtidnofire}}
</pre>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        name: "TG",
        computed: mapState({
            code1: state => state.tgcodeblocks.code1,
            code2: state => state.tgcodeblocks.code2,
            excludeprice: state => state.excludeprice.code,
            mtidnofire: state => state.mtidnofire.code,
            result1: state => state.tgresultblocks.code1,
            result2: state => state.tgresultblocks.code2,
            result3: state => state.tgresultblocks.code3,
            result4: state => state.tgresultblocks.code4,
            mcrtransactionidblock: state => state.tgresultblocks.mcrtransactionidblock,
            mcrpriceblock: state => state.tgresultblocks.mcrpriceblock,
            merchantname: state => state.tgvariables.merchantname,
            mcrtransactionid: state => state.tgvariables.mcrtransactionid,
            mcrprice: state => state.tgvariables.mcrprice
        })
    }
</script>
