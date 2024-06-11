<template>
    <AboutUsHeroComponent
            about-us="About us"
            company-name="SEMPRE Studios"
            description="Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros"
            button-title="Contact"
    />
    <OurGoalSection />
</template>

<script>
import AboutUsHeroComponent from "@/components/sections/AboutUsPageSections/AboutUsHeroComponent.vue";
import OurGoalSection from "@/components/sections/AboutUsPageSections/OurGoalSection.vue";

export default {
    name: "AboutUsPage",
    components: {
        OurGoalSection,
        AboutUsHeroComponent

    },
    data() {
        return {
            header: {
                part1: "About Us",
            }
        }
    }

}
</script>
