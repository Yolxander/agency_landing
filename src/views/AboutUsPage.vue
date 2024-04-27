<template>
    <MainDescription />
    <MinimalTabs />
    <ContactUsPage id="contactUsPage"/>
</template>

<script>
import ContactUsPage from "@/components/sections/HomePageSections/ContactUsSection.vue";
import MainDescription from "@/components/sections/AboutUsPageSections/MainDescription.vue";
import MinimalTabs from "@/components/sections/AboutUsPageSections/MinimalTabs.vue";

export default {
    name: "AboutUsPage",
    components: {
        MinimalTabs,
        MainDescription,
        ContactUsPage,
    },

}
</script>

