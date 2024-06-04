<template>
    <div class="container">
        <div class="text-section">
            <div class="header">
                <div class="title">Some pieces of our work</div>
                <div class="description-container">
                    <div class="description">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna semper orci a tincidunt.</div>
                </div>
            </div>
            <div class="contact-button">
                <div class="contact-text">Show More</div>
            </div>
        </div>
        <ProjectsSection />
        <ProjectSection2 />
    </div>
</template>

<script>
import ProjectsSection from "@/components/sections/HomePageSections/ProjectSection.vue";
import ProjectSection2 from "@/components/sections/HomePageSections/ProjectSection2.vue";

export default {
    name: "ProfolioSection",
    components: {ProjectSection2, ProjectsSection}
}
</script>

<style scoped>
.container {
    width: 100%;
    height: fit-content;
    background: #110F0F;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    z-index: 3;
    padding-top: 80px;
    padding-bottom: 80px;
}

.text-section{
    width: 412px;
    height: 290px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    display: flex;
    align-self: start;
}


.header {
    align-self: stretch;
    height: 224px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
    display: flex;
}

.title {
    align-self: stretch;
    color: white;
    font-size: 40px;
    font-family: 'Agrandir', sans-serif;
    font-weight: 700;
    line-height: 56px;
    word-wrap: break-word;
}

.description-container {
    align-self: stretch;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
}

.description {
    flex: 1 1 0;
    color: rgba(255, 255, 255, 0.60);
    font-size: 16px;
    font-family: 'Agrandir', sans-serif;
    font-weight: 500;
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

.contact-button {
    border: 1px solid #FFA800;
}

</style>