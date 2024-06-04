<template>
    <NavBarComponent class="nav"/>
    <HeroComponent />
    <NewServicesSection />
   <WhyUsSection />
</template>

<script>
import HeroComponent from "@/components/sections/HomePageSections/HeroComponent.vue";
import NavBarComponent from "@/components/global/NavBarComponent.vue";
import NewServicesSection from "@/components/sections/HomePageSections/NewServicesSection.vue";
import WhyUsSection from "@/components/sections/HomePageSections/WhyUsSection.vue";


export default {
    name: "WelcomePage",
    components: {WhyUsSection, NewServicesSection, NavBarComponent, HeroComponent}
}
</script>

<style scoped>

</style>