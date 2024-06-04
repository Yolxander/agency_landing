<template>
    <NavBarComponent class="nav"/>
    <HeroComponent />
</template>

<script>
import HeroComponent from "@/components/sections/HomePageSections/HeroComponent.vue";
import NavBarComponent from "@/components/global/NavBarComponent.vue";

export default {
    name: "WelcomePage",
    components: {NavBarComponent, HeroComponent}
}
</script>

<style scoped>

</style>