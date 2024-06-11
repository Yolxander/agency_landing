<template>
<!--    TODO::finshed the next part of the services and remove background animation-->
    <AboutUsHeroComponent
        :about-us="selectedService.title"
        :company-name="selectedService.companyName"
        :description="selectedService.description"
        :button-title="selectedService.buttonTitle"
    />
    <ServiceInfoSection/>
</template>

<script>

import AboutUsHeroComponent from "@/components/sections/AboutUsPageSections/AboutUsHeroComponent.vue";
import ServiceInfoSection from "@/components/sections/OurServicesPageSections/ServiceInfoSection.vue";

export default {
    name: "OurServicesPage",
    components: {
        ServiceInfoSection,
        AboutUsHeroComponent,
    },
    props: {
        service: {
            type: Object,
            default: () => ({
                title: "About us",
                companyName: "SEMPRE Studios",
                description: "Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros",
                buttonTitle: "Contact"
            })
        }
    },
    data() {
        return {
            selectedService: this.service
        };
    },
    watch: {
        '$route.query.service': {
            handler(newService) {
                if (newService) {
                    this.selectedService = JSON.parse(newService);
                }
            },
            immediate: true
        }
    }
};
</script>


<style scoped>
/* Add any additional styles here */
</style>