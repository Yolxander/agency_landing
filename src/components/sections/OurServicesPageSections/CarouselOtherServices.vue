<template>
    <div class="main-container">
        <div class="branding-text">Other services</div>
        <div class="services-container">
            <div class="services-row">
                <OtherServiceCard
                    v-for="(service, index) in services"
                    :key="index"
                    :title="service.title"
                    :description="service.description"
                    @click="selectService(service)"
                />
            </div>
        </div>
    </div>
</template>

<script>
import OtherServiceCard from './OtherServiceCard.vue';

export default {
    name: "CarouselOtherServices",
    components: {
        OtherServiceCard
    },
    data() {
        return {
            services: [
                {
                    "title": "Branding",
                    "description": "Empower your business with a unique brand identity that resonates with your audience and enhances market presence.",
                    "companyName": "Find your niche",
                    "buttonTitle": "Build my brand"
                },
                {
                    "title": "Web Development",
                    "description": "Create a professional, user-friendly website that drives engagement and supports your business growth.",
                    "companyName": "Develop your site",
                    "buttonTitle": "Start development"
                },
                {
                    "title": "Digital Marketing",
                    "description": "Leverage cutting-edge digital marketing strategies to expand your reach and connect with your target audience effectively.",
                    "companyName": "Boost your reach",
                    "buttonTitle": "Market now"
                },
                // {
                //     "title": "Mobile App",
                //     "description": "Develop intuitive and engaging mobile apps that enhance customer interaction and support your business objectives.",
                //     "companyName": "Go mobile",
                //     "buttonTitle": "Build app"
                // },
                // {
                //     "title": "SEO",
                //     "description": "Optimize your online presence with advanced SEO techniques to improve search engine rankings and drive organic traffic.",
                //     "companyName": "Optimize search",
                //     "buttonTitle": "Optimize now"
                // },
                // {
                //     "title": "User Testing",
                //     "description": "Ensure your product meets user expectations with comprehensive user testing services that provide valuable insights for improvement.",
                //     "companyName": "Test your product",
                //     "buttonTitle": "Start testing"
                // }
            ]
        };
    },
    methods: {
        selectService(service) {
            this.$emit('service-selected', service);
        }
    }
}
</script>

<style scoped>
.main-container {
    width: 1300px;
    height: 276px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;
    display: inline-flex;
    margin-bottom: 40px;
}

.branding-text {
    align-self: stretch;
    color: white;
    font-size: 32px;
    font-family: Agrandir, sans-serif;
    font-weight: 700;
    line-height: 56px;
    word-wrap: break-word;
}

.services-container {
    align-self: stretch;
    height: 188px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;
    display: flex;
}

.services-row {
    align-self: stretch;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: inline-flex;
}
</style>