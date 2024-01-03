<template>
    <section class="hero">
      <NavBarComponent />
    </section>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";

export default {
    name: "LandingPage",
    components: {
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