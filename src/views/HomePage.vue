<template>

    <LandingPage id="landingPage"/>
    <AboutUsPage id="aboutUsPage"/>
    <WhatWeDoPage id="whatWeDoPage"/>
    <ContactUsPage id="contactUsPage"/>

</template>

<script>

import AboutUsPage from "@/components/sections/HomePageSections/AboutUsSection.vue";
import LandingPage from "@/components/sections/HomePageSections/LandingSection.vue";
import WhatWeDoPage from "@/components/sections/HomePageSections/WhatWeDoSection.vue";
import ContactUsPage from "@/components/sections/ContactUsSection.vue";

export default {
    name: "HomePage",
    components: {
        ContactUsPage,
        WhatWeDoPage,
        LandingPage,
        AboutUsPage,
    }
}
</script>

<style scoped>

</style>