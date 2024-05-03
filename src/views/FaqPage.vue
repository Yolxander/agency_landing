<template>
    <FaqDropdown />
    <ContactUsPage id="contactUsPage"/>
</template>

<script>
import ContactUsPage from "@/components/sections/ContactUsSection.vue";
import FaqDropdown from "@/components/sections/FQAPageSections/FaqDropdown.vue";

export default {
    name: "FaqPage",
    components: {
        FaqDropdown,
        ContactUsPage,
    },

}
</script>

