<template>
    <MainDescription />
    <ContactUsPage id="contactUsPage"/>
</template>

<script>
import ContactUsPage from "@/components/sections/HomePageSections/ContactUsSection.vue";
import MainDescription from "@/components/sections/AboutUsPageSections/MainDescription.vue";

export default {
    name: "AboutUsPage",
    components: {
        MainDescription,
        ContactUsPage,
    },

}
</script>

