<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <TGLS msg="Welcome to Your Vue.js App"/>
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
