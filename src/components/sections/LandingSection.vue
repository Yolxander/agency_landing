<template>
    <section class="hero">
        <CallToAction />
        <WhiteStrapComponent />
    </section>
</template>

<script>

import CallToAction from "@/components/CallToAction.vue";
import WhiteStrapComponent from "@/components/WhiteStrapComponent.vue";

export default {
    name: "LandingPage",
    components: {
        WhiteStrapComponent,
        CallToAction,
    },
    data() {
        return {
            showMenu: false,
        }
    },

}
</script>

<style scoped>
    .hero{
        height: 80vh;
        width: 100vw;
        background-color: black;
        flex-direction: row;
        justify-content:center;
        position: relative;
    }

    section{
        overflow-x: hidden;
    }

    /* Responsive adjustments for smaller screens */
    @media (max-width: 768px) {
        .hero{
            height: 70vh;
        }
    }


</style>