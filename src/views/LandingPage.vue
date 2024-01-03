<template>
    <section class="hero">
      <NavBarComponent />
        <CallToAction />
        <WhiteStrapComponent />
    </section>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import CallToAction from "@/components/CallToAction.vue";
import WhiteStrapComponent from "@/components/WhiteStrapComponent.vue";

export default {
    name: "LandingPage",
    components: {
        WhiteStrapComponent,
        CallToAction,
        NavBarComponent
    },

}
</script>

<style scoped>
    .hero{
        height: 100vh;
        width: 100vw;
        background-color: black;
        flex-direction: row;
        justify-content: space-between;
        position: relative;
    }

</style>