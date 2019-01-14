<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <TGLS msg="Welcome to Your Vue.js App"/>
        <div class="form-item">
            <vue-group label="Radio" v-model="form.radio2">
                <vue-radio name="radio2" :value="1">1</vue-radio>
                <vue-radio name="radio2" :value="2">2</vue-radio>
            </vue-group>
            - {{ form.radio2 }}
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from "@/components/HelloWorld.vue";
    import TGLS from "@/components/TGLS.vue"

    export default {
        name: "tgls",
        components: {
            TGLS
        }
    };
</script>
