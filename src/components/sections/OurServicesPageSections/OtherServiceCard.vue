<template>
    <div class="service-card" @click="handleClick">
        <div class="icon" v-html="getIcon()"></div>
        <div class="service-title">{{ title }}</div>
        <div class="service-description">{{ description }}</div>
    </div>
</template>

<script>
import { brandingIcon, webDevelopmentIcon, digitalMarketingIcon, mobileAppIcon, seoIcon, userTestingIcon } from '@/components/icons.js';

export default {
    name: "OtherServiceCard",
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
    },
    methods: {
        handleClick() {
            this.$emit('click');
        },
        getIcon() {
            switch (this.title) {
                case 'Branding':
                    return brandingIcon;
                case 'Web Development':
                    return webDevelopmentIcon;
                case 'Digital Marketing':
                    return digitalMarketingIcon;
                case 'Mobile App':
                    return mobileAppIcon;
                case 'SEO':
                    return seoIcon;
                case 'User Testing':
                    return userTestingIcon;
                default:
                    return '';
            }
        },
    },
}
</script>

<style scoped>
.service-card {
    width: 370px;
    height: 168px;
    padding: 24px;
    border-radius: 4px;
    overflow: hidden;
    border: 1px #A1AEBF solid;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    display: inline-flex;
    cursor: pointer;
}

.icon {
    width: 48px;
    height: 48px;
    position: relative;
}

.service-title {
    align-self: stretch;
    color: white;
    font-size: 28px;
    font-family: Agrandir, sans-serif;
    font-weight: 700;
    line-height: 36px;
    word-wrap: break-word;
}

.service-description {
    align-self: stretch;
    color: rgba(255, 255, 255, 0.60);
    font-size: 14px;
    font-family: Agrandir, sans-serif;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.28px;
    word-wrap: break-word;
}
</style>