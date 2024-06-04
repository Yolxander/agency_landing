<template>
    <NavBarComponent class="nav"/>
    <HeroComponent />
    <NewServicesSection />
</template>

<script>
import HeroComponent from "@/components/sections/HomePageSections/HeroComponent.vue";
import NavBarComponent from "@/components/global/NavBarComponent.vue";
import NewServicesSection from "@/components/sections/HomePageSections/NewServicesSection.vue";


export default {
    name: "WelcomePage",
    components: {NewServicesSection, NavBarComponent, HeroComponent}
}
</script>

<style scoped>

</style>