<template>
    <div>
        <NavBarComponent />
        <div ref="sections">
            <LandingPage id="landingPage" />
            <AboutUsPage id="aboutUsPage" />
            <WhatWeDoPage id="whatWeDoPage" />
            <ContactUsPage id="contactUsPage" />
        </div>
    </div>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
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
        NavBarComponent
    }
}
</script>

<style scoped>

</style>