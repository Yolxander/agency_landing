<template>
    <HeroComponent />
    <NewServicesSection />
    <WhyUsSection/>
    <PortfolioSection/>
    <CallToActionSection/>
</template>

<script>
import HeroComponent from "@/components/sections/HomePageSections/HeroComponent.vue";
import NewServicesSection from "@/components/sections/HomePageSections/NewServicesSection.vue";
import WhyUsSection from "@/components/sections/HomePageSections/WhyUsSection.vue";
import PortfolioSection from "@/components/sections/HomePageSections/PortfolioSection.vue";
import CallToActionSection from "@/components/sections/HomePageSections/CallToActionSection.vue";



export default {
    name: "WelcomePage",
    components: {
        CallToActionSection,
        PortfolioSection,
        WhyUsSection,
        NewServicesSection,
        HeroComponent}
}
</script>

<style scoped>

</style>