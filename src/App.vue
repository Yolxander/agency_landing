<template>
    <NavBarComponent />
    <router-view />
    <FooterComponent />
</template>



<script>
import FooterComponent from "@/components/FooterComponent.vue";
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
import router from "./router";
import NavBarComponent from "@/components/NavBarComponent.vue";

export default {
    name: 'App',
    components: {
        NavBarComponent,
        FooterComponent

    },
    setup() {
        const siteData = reactive({
            title: `SEMPRE studios`,
            description: `SEMPRE studios is a full-service digital agency. We can make all your digital dreams come true.`,
        });
        useHead({
            // Can be static or computed
            title: computed(() => siteData.title),
            meta: [
                {
                    name: `description`,
                    content: computed(() => siteData.description),
                },
            ],
        });
    },
    router,
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
