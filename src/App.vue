<template>
    <div id="app">GTM Helper for TG / LS
        <br />
        <router-link to="/">TG</router-link> |
        <router-link to="/LS">LS</router-link>
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "App"
    };
</script>


