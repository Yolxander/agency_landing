<template>
    <ServicesSection/>
    <ContactUsPage id="contactUsPage"/>
</template>

<script>
import ServicesSection from "@/components/sections/ServicesSection.vue";
import ContactUsPage from "@/components/sections/ContactUsSection.vue";

export default {
    name: "OurServicesPage",
    components: {
        ContactUsPage,
        ServicesSection,
    },

}
</script>

