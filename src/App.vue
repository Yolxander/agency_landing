<template>
    <div>
        <NavBarComponent />
        <div ref="sections">
            <LandingPage ref="landingPage" />
            <AboutUsPage ref="aboutUsPage" />
            <WhatWeDoPage ref="whatWeDoPage" />
            <ContactUsPage ref="contactUsPage" />
        </div>
    </div>
</template>



<script>

import NavBarComponent from "@/components/NavBarComponent.vue";
import LandingPage from "@/views/LandingPage.vue";
import AboutUsPage from "@/views/AboutUsPage.vue";
import WhatWeDoPage from "@/views/WhatWeDoPage.vue";
import ContactUsPage from "@/views/ContactUsPage.vue";

export default {
    name: 'App',
    components: {
        ContactUsPage,
        WhatWeDoPage,
        AboutUsPage,
        LandingPage,
        NavBarComponent,
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
    margin: 0;
    overflow-x: hidden;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    z-index: 10; /* Ensure it's above other content */
}
</style>
