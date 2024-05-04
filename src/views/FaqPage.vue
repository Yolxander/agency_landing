<template>
    <DynamicHeader :header="header"/>
    <DropdownComponent />
    <ContactUsPage id="contactUsPage"/>
</template>

<script>
import ContactUsPage from "@/components/sections/ContactUsSection.vue";
import DynamicHeader from "@/components/headers/DynamicHeader.vue";
import DropdownComponent from "@/components/sections/FQAPageSections/DropdownComponent.vue";

export default {
    name: "FaqPage",
    components: {
        DropdownComponent,
        DynamicHeader,
        ContactUsPage,
    },
    data() {
        return {
            header: {
                part1: "FAQ",
            }
        }
    }

}
</script>
