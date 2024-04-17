<template>
    <NavBarComponent />
    <section class="hero">

    </section>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";

export default {
    name: "OurServicesPage",
    components: {NavBarComponent}
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