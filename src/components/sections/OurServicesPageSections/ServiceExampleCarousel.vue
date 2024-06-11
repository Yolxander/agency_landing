<template>
    <div class="main-container">
        <div class="inner-container-1">
            <div class="inner-container-2">
                <div class="branding-text">Branding Works</div>
                <div class="flex-container">
                    <CarouselCardComponent
                        v-for="(item, index) in cards"
                        :key="index"
                        :name="item.name"
                        :img="item.img"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import CarouselCardComponent from './CarouselCardComponent.vue';

export default {
    name: "ServiceExampleCarousel",
    components: {
        CarouselCardComponent
    },
    data() {
        return {
            cards: [
                { name: "Creative landing page", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d" },
                { name: "Another landing page", img: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
                { name: "Yet another landing page", img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1" }
            ]
        };
    }
}
</script>

<style scoped>
/* Include the extracted styles here */
.main-container {
    width: 100%;
    height: fit-content;
    padding-top: 22px;
    padding-bottom: 40px;
    padding-right: 40px;
    justify-content: center;
    align-items: center;
    display: inline-flex;
}

.inner-container-1 {
    flex: 1 1 0;
    align-self: stretch;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 80px;
    display: inline-flex;
}

.inner-container-2 {
    align-self: stretch;
    height: 374px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;
    display: flex;
}

.branding-text {
    align-self: stretch;
    color: white;
    font-size: 32px;
    font-family: 'Agrandir', sans-serif;
    font-weight: 700;
    line-height: 56px;
    word-wrap: break-word;
}

.flex-container {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: inline-flex;
}
</style>