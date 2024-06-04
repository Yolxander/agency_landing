<template>

    <HeroComponent />
</template>

<script>
import HeroComponent from "@/components/HeroComponent.vue";

export default {
    name: 'App',
    components: {
        HeroComponent,
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
