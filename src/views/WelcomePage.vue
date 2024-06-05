<template>
    <NavBarComponent class="nav"/>
    <HeroComponent />
    <NewServicesSection />
   <WhyUsSection />
    <PorfolioSection />
  <CallToActionSection />
  <FooterComponent />
</template>

<script>
import HeroComponent from "@/components/sections/HomePageSections/HeroComponent.vue";
import NavBarComponent from "@/components/global/NavBarComponent.vue";
import NewServicesSection from "@/components/sections/HomePageSections/NewServicesSection.vue";
import WhyUsSection from "@/components/sections/HomePageSections/WhyUsSection.vue";
import PorfolioSection from "@/components/sections/HomePageSections/PorfolioSection.vue";
import CallToActionSection from "@/components/sections/HomePageSections/CallToActionSection.vue";
import FooterComponent from "@/components/global/FooterComponent.vue";


export default {
    name: "WelcomePage",
    components: {
        FooterComponent,
        CallToActionSection, PorfolioSection, WhyUsSection, NewServicesSection, NavBarComponent, HeroComponent}
}
</script>

<style scoped>

</style>