<template>
  <AboutUsHeroComponent/>
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
