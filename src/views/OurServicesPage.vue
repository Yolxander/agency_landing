<template>
    <AboutUsHeroComponent
        about-us="Branding"
        company-name="Find your niche"
        description="Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros "
        button-title="Build my brand"
    />
    <OurGoalSection />
</template>

<script>
import OurGoalSection from "@/components/sections/AboutUsPageSections/OurGoalSection.vue";
import AboutUsHeroComponent from "@/components/sections/AboutUsPageSections/AboutUsHeroComponent.vue";

export default {
    name: "OurServicesPage",
    components: {
        AboutUsHeroComponent, OurGoalSection

    },

}
</script>

