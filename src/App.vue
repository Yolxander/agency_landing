<template>
    <NavBarComponent class="nav"/>
    <router-view />
    <FooterComponent/>
</template>

<script>


import FooterComponent from "@/components/global/FooterComponent.vue";
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
import router from "./router";
import NavBarComponent from "@/components/global/NavBarComponent.vue";

export default {
    name: 'App',
    components: {
        NavBarComponent,
        FooterComponent,

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
body{
    /*background: #110F0F;*/
    background: black;
    overflow-x: hidden;
    /*overflow-y: hidden;*/
    font-family: 'Agrandir', sans-serif;
}
#app {
    overflow-x: hidden;
    overflow-y: hidden;
}
</style>
