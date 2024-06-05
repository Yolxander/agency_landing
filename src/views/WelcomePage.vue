<template>
    <NavBarComponent class="nav"/>
    <HeroComponent />
    <NewServicesSection />
    <WhyUsSection/>
    <PortfolioSection/>
<!--    <CallToActionSection/>-->
<!--    <FooterComponent/>-->
</template>

<script>
import HeroComponent from "@/components/sections/HomePageSections/HeroComponent.vue";
import NavBarComponent from "@/components/global/NavBarComponent.vue";
import NewServicesSection from "@/components/sections/HomePageSections/NewServicesSection.vue";
import WhyUsSection from "@/components/sections/HomePageSections/WhyUsSection.vue";
import PortfolioSection from "@/components/sections/HomePageSections/PortfolioSection.vue";
// import CallToActionSection from "@/components/sections/HomePageSections/CallToActionSection.vue";
// import FooterComponent from "@/components/global/FooterComponent.vue";


export default {
    name: "WelcomePage",
    components: {
        // FooterComponent,
        // CallToActionSection,
        PortfolioSection,
        WhyUsSection,
        NewServicesSection,
        NavBarComponent,
        HeroComponent}
}
</script>

<style scoped>

</style>