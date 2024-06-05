<template>
    <div class="service-card">
        <div class="icon" v-html="getIcon()"></div>
        <div class="title">{{ title }}</div>
        <div class="description">{{ description }}</div>
    </div>
</template>

<script>
import { brandingIcon, webDevelopmentIcon, digitalMarketingIcon, mobileAppIcon, seoIcon, userTestingIcon } from '@/components/icons.js';

export default {
    name: 'ServiceCard',
    props: {
        title: String,
        description: String,
    },
    methods: {
        getIcon() {
            switch (this.title) {
                case 'Branding':
                    return brandingIcon;
                case 'Web development':
                    return webDevelopmentIcon;
                case 'Digital marketing':
                    return digitalMarketingIcon;
                case 'Mobile App':
                    return mobileAppIcon;
                case 'SEO':
                    return seoIcon;
                case 'User testing':
                    return userTestingIcon;
                default:
                    return '';
            }
        },
    },
};
</script>

<style scoped>
.service-card {
    width: 338px;
    height: 208px;
    padding: 20px;
    border-radius: 4px;
    overflow: hidden;
    border: 1px #A1AEBF solid;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    color: white;
}

.icon {
    width: 48px;
    height: 48px;
    position: relative;
}

.title {

    color: white;
    font-size: 28px;
    font-family: 'Agrandir', sans-serif;
    font-weight: 700;
    line-height: 36px;
    word-wrap: break-word;
}

.description {
    align-self: stretch;
    color: rgba(255, 255, 255, 0.60);
    font-size: 14px;
      font-family: 'Agrandir', sans-serif;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.28px;
    word-wrap: break-word;
}

/* Mobile Styles */
@media (max-width: 768px) {
    .service-card {
        width: 90%;
    }
}
</style>
