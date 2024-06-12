<template>
    <div class="main-container">
        <div class="branding-text">Other services</div>
        <div class="services-container">
            <div class="services-row">
                <OtherServiceCard
                    title="Mobile App"
                    description="Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices"
                    :iconBackgroundStyle="{ width: '27px', height: '39px', left: '10.50px', top: '4.50px', background: 'linear-gradient(253deg, #9DE8EE 0%, #9DE8EE 0%, #FA7C0B 49%, #9F8CED 100%)' }"
                    :iconForegroundStyle="{ width: '17.40px', height: '12.09px', left: '25.54px', top: '31.46px', background: 'white' }"
                />
                <OtherServiceCard
                    title="SEO"
                    description="Integer ante non nunc, eget est justo vel semper nunc. Lacus"
                    :iconBackgroundStyle="{ width: '42px', height: '36px', left: '3px', top: '6px', background: 'linear-gradient(253deg, #9DE8EE 0%, #9DE8EE 0%, #FA7C0B 49%, #9F8CED 100%)' }"
                    :iconForegroundStyle="{ width: '24.93px', height: '24.18px', left: '19.50px', top: '21px', background: 'white' }"
                />
                <OtherServiceCard
                    title="User Testing"
                    description="Sed faucibus faucibus egestas volutpat, accumsan adipiscing egestas est. Auctor et leo urna est."
                    :iconBackgroundStyle="{ width: '42px', height: '42px', left: '3px', top: '3px', background: 'linear-gradient(253deg, #9DE8EE 0%, #9DE8EE 0%, #FA7C0B 49%, #9F8CED 100%)' }"
                    :iconForegroundStyle="{ width: '18px', height: '19.29px', left: '15px', top: '15px', background: 'white' }"
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