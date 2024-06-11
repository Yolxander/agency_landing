<template>
    <div class="container new-services-section">
        <div class="header">
            <div class="title">We Offer</div>
            <div class="description">
                Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi
                rhoncus, tellus, eros consequat magna semper orci a tincidunt.
            </div>
        </div>
        <div class="services">
            <ServiceCard
                v-for="(service, index) in services"
                :key="service.title"
                :title="service.title"
                :description="service.description"
                :style="{ animationDelay: `${index * 0.5}s` }"
                class="fade-in"
                @click="selectService(service)"
            />
        </div>
    </div>
</template>

<script>
import ServiceCard from './ServiceCard.vue';

export default {
    name: 'NewServicesSection',
    components: {
        ServiceCard,
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
                {
                    "title": "Mobile App Development",
                    "description": "Develop intuitive and engaging mobile apps that enhance customer interaction and support your business objectives.",
                    "companyName": "Go mobile",
                    "buttonTitle": "Build app"
                },
                {
                    "title": "SEO",
                    "description": "Optimize your online presence with advanced SEO techniques to improve search engine rankings and drive organic traffic.",
                    "companyName": "Optimize search",
                    "buttonTitle": "Optimize now"
                },
                {
                    "title": "User Testing",
                    "description": "Ensure your product meets user expectations with comprehensive user testing services that provide valuable insights for improvement.",
                    "companyName": "Test your product",
                    "buttonTitle": "Start testing"
                }
            ]
        };
    },
    methods: {
        selectService(service) {
            this.$emit('service-selected', service);
        }
    }
};
</script>

<style scoped>
.container {
    width: 100%;
    height: 100vh;
    padding: 80px 70px 75px 0px;
    background: #110F0F;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
    position: relative;
}

.header {
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
}

.title {
    text-align: center;
    color: white;
    font-size: 40px;
    font-family: 'Agrandir', sans-serif;
    font-weight: 700;
    line-height: 56px;
}

.description {
    text-align: center;
    color: rgba(230, 230, 230, 0.60);
    font-size: 16px;
    font-family: 'Agrandir', sans-serif;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.32px;
    width: 40vw;
}

.services {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    justify-content: center;
}

/* Mobile Styles */
@media (max-width: 768px) {
    .container {
        padding: 50px 70px 45px 0px;
        height: fit-content;
        gap: 32px;
    }
    .header {
        height: fit-content;
        gap: 10px;
    }
    .description {
        width: 100%;
    }
}
</style>