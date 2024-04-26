<template>
    <ServicesSection/>
    <ContactUsPage id="contactUsPage"/>
</template>

<script>
import ServicesSection from "@/components/sections/OurServicesPageSections/ServicesSection.vue";
import ContactUsPage from "@/components/sections/HomePageSections/ContactUsSection.vue";

export default {
    name: "OurServicesPage",
    components: {
        ContactUsPage,
        ServicesSection,
    },

}
</script>

