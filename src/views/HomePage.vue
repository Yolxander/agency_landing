<template>

    <LandingPage id="landingPage"/>
    <AboutUsPage id="aboutUsPage"/>
    <WhatWeDoPage id="whatWeDoPage"/>
    <ContactUsPage id="contactUsPage"/>

</template>

<script>

import AboutUsPage from "@/components/sections/AboutUsSection.vue";
import LandingPage from "@/components/sections/LandingSection.vue";
import WhatWeDoPage from "@/components/sections/WhatWeDoSection.vue";
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