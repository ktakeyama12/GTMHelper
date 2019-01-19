<template>
<div>
    <ExcludeTax/>
    <SetDiscount/>
    <ProductNameSKU/>
    <GetDataLayer/>
<pre>
{{code1}}
{{excludetax}}
{{code2}}
{{productnamesku}}
{{code3}}
{{setdiscount}}
{{code4}}
</pre>
</div>
</template>

<script>
    import { mapState } from 'vuex'
    import ExcludeTax from './ExcludeTax'
    import SetDiscount from './SetDiscount'
    import ProductNameSKU from './ProductNameSKU'
    import GetDataLayer from './GetDataLayer'

    export default {
        name: "TG",
        computed: mapState({
            excludetax: state => state.excludetax.code,
            setdiscount: state => state.setdiscount.code,
            productnamesku: state => state.productnamesku.code1,
            code1: state => state.lscodeblocks.code1,
            code2: state => state.lscodeblocks.code2,
            code3: state => state.lscodeblocks.code3,
            code4: state => state.lscodeblocks.code4
        }),
        components: {
            ExcludeTax,
            SetDiscount,
            ProductNameSKU,
            GetDataLayer
        }
    }
</script>