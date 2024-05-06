<template>
    <DynamicHeader :header="header"/>
    <ModernTabs />
</template>

<script>
// import MainDescription from "@/components/sections/AboutUsPageSections/MainDescription.vue";
import ModernTabs from "@/components/sections/AboutUsPageSections/ModernTabs.vue";
import DynamicHeader from "@/components/headers/DynamicHeader.vue";

export default {
    name: "AboutUsPage",
    components: {
        DynamicHeader,
        ModernTabs,
        // MainDescription,
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
