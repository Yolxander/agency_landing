<template>
    <div>
        <NavBarComponent />
        <div ref="sections">
            <ServicesSection />
            <ContactUsPage id="contactUsPage" />
        </div>
    </div>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";

import ServicesSection from "@/components/sections/ServicesSection.vue";
import ContactUsPage from "@/components/sections/ContactUsSection.vue";

export default {
    name: "OurServicesPage",
    components: {
        ContactUsPage,
        ServicesSection,
        NavBarComponent},

}
</script>

