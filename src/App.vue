<template>
    <router-view></router-view>
    <FooterComponent />
</template>



<script>


import FooterComponent from "@/components/FooterComponent.vue";

export default {
    name: 'App',
    components: {
        FooterComponent

    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
    margin: 0;
    overflow-x: hidden;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    z-index: 10; /* Ensure it's above other content */
}
</style>
