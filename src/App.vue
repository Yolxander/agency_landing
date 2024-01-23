<template>
    <NavBarComponent  />
    <router-view/>
</template>

<script>

import NavBarComponent from "@/components/NavBarComponent.vue";

export default {
    name: 'App',
    components: {
        NavBarComponent,
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
    overflow-y: hidden;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: blue;
    z-index: 10; /* Ensure it's above other content */
}
</style>
