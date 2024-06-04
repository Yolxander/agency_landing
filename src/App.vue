<template>
    <WelcomePage/>
</template>

<script>


import WelcomePage from "@/views/WelcomePage.vue";

export default {
    name: 'App',
    components: {
        WelcomePage

    }
}
</script>

<style>
body{
    /*background: #110F0F;*/
    background: black;
    overflow-x: hidden;
    overflow-y: hidden;
}
#app {
    overflow-x: hidden;
    overflow-y: hidden;
}
</style>
