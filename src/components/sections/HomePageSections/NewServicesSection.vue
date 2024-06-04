<template>
    <div class="container">
        <div class="header">
            <div class="title">We Offer</div>
            <div class="description">
                Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.
            </div>
        </div>
        <div class="services">
            <ServiceCard
                    title="Branding"
                    description="Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices"
            />
            <ServiceCard
                    title="Web development"
                    description="Integer ante non nunc, eget est justo vel semper nunc. Lacus"
            />
            <ServiceCard
                    title="Digital marketing"
                    description="Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est."
            />
            <ServiceCard
                    title="Mobile App"
                    description="Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices"
            />
            <ServiceCard
                    title="SEO"
                    description="Integer ante non nunc, eget est justo vel semper nunc. Lacus"
            />
            <ServiceCard
                    title="User testing"
                    description="Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est."
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
</style>
