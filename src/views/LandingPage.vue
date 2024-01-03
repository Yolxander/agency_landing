<template>
    <section class="hero">
      <NavBarComponent />
        <CallToAction />
    </section>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import CallToAction from "@/components/CallToAction.vue";

export default {
    name: "LandingPage",
    components: {
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
    }

</style>