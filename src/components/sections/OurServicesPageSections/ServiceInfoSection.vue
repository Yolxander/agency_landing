<template>
    <div class="container">
        <div class="company-info">
            <div class="company-title">Process</div>
            <div class="company-description-container">
                <div class="company-description">
                    Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit. Commodo diam vulputate dui proin quis enim nibh. Non integer ac libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu elit. Morbi aliquam porttitor mattis consequat neque, tellus blandit.
                </div>
            </div>
        </div>
        <ServiceExampleCarousel />
        <CarouselOtherServices />
        <button class="contact-button" @click="$router.push('/')">
            <span class="contact-text">Go to home</span>
        </button>
    </div>



</template>

<script>
import ServiceExampleCarousel from "@/components/sections/OurServicesPageSections/ServiceExampleCarousel.vue";
import CarouselOtherServices from "@/components/sections/OurServicesPageSections/CarouselOtherServices.vue";

export default {
    name: "ServiceInfoSection",
    components: {CarouselOtherServices, ServiceExampleCarousel}
}
</script>

<style scoped>
.container {
    width: 100%;
    height: fit-content;
    background: #0F0F0F;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-evenly;
    font-family: 'Agrandir', sans-serif;
    position: relative;
    padding-left: 55px;
    padding-bottom: 40px;
    padding-top: 40px;
}

.company-info {
    width: 971px;
    height: 240px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: inline-flex;
}

.company-title {
    align-self: stretch;
    color: white;
    font-size: 32px;
    font-family: 'Agrandir', sans-serif;
    font-weight: 700;
    line-height: 56px;
    word-wrap: break-word;
}

.company-description-container {
    width: 969px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
}

.company-description {
    width: 956px;
    color: rgba(255, 255, 255, 0.60);
    font-size: 16px;
    font-family: 'Agrandir', sans-serif;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.32px;
    word-wrap: break-word;
}


.company-info {
    width: 971px;
    height: 240px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: inline-flex;
}

.company-title {
    align-self: stretch;
    color: white;
    font-size: 32px;
    font-family: 'Agrandir', sans-serif;
    font-weight: 700;
    line-height: 56px;
    word-wrap: break-word;
}

.company-description-container {
    width: 969px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
}

.company-description {
    width: 956px;
    color: rgba(255, 255, 255, 0.60);
    font-size: 16px;
    font-family: 'Agrandir', sans-serif;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.32px;
    word-wrap: break-word;
}

.contact-button {
    padding: 10.8px 21.6px; /* 8px * 1.35, 16px * 1.35 */
    background: rgba(50.71, 50.71, 50.71, 0.20);
    border-radius: 67.5px; /* 50px * 1.35 */
    border: 0.675px #FFA800 solid; /* 0.5px * 1.35 */
    backdrop-filter: blur(20px);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    z-index: 4;
    cursor: pointer;
    color: white;
    font-size: 10.8px; /* 8px * 1.35 */
    font-family: 'Agrandir', sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    line-height: 10.8px; /* 8px * 1.35 */
    word-wrap: break-word;
    border: none;
    outline: none;
    color: #FFA800;
}

.contact-button:hover {
    background: #FFA800;
}

.contact-button:hover .contact-text {
    color: black;
    text-decoration: none;
}

.contact-button{
    border: 1px solid #FFA800;
}
/* Mobile Styles */
@media (max-width: 768px) {
    .container{
       flex-direction: column;
        padding-left: 5px;
        height: fit-content;
        gap: 32px;
        margin-bottom: 50px;
    }

    .company-description-container{
        width: 90vw;
    }

    .company-info{
        height: fit-content;
    }

}


</style>