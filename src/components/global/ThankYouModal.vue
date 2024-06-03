<template>
    <div class="modal-container">
        <div class="header">
            <span class="header-text">Thanks for trying <span class="header-highlight"> out! </span> </span>
        </div>
        <div class="divider"></div>
        <div class="support-text">Support me to make more template like this by following on </div>
        <div class="divider"></div>
        <div class="footer">
            <div class="profile">
                <div class="profile-icon">
                    <div class="icon"></div>
                </div>
                <div class="profile-info">
                    <div class="profile-name">SEMPREStudios</div>
                    <div class="profile-site">SEMPREStudios.com</div>
                </div>
            </div>
            <div class="social-buttons">
                <div class="social-button">
                    <div class="social-text">Instagram</div>
                </div>
                <div class="social-button">
                    <div class="social-text">FIGMA</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ThankYouModal"
}
</script>

<style scoped>
.modal-container {
    width: 40vw;
    height: 50vh;
    padding: 27px; /* 20px * 1.35 */
    background: transparent;
    border-radius: 16px;
    border: 2px #9DE8EE solid;
    backdrop-filter: blur(0px);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 27px; /* 20px * 1.35 */
}

.header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.header-text, .header-highlight {
    color: white;
    font-size: 64.8px; /* 48px * 1.35 */
    font-family: Agrandir;
    font-weight: 700;
}

.header-highlight {
    color: #9DE8EE;
}

.divider {
    width: 100%;
    height: 2px;
    background: linear-gradient(253deg, #9DE8EE 0%, #9DE8EE 0%, #FA7C0B 49%, #9F8CED 100%);
}

.support-text {
    color: white;
    font-size: 32.4px; /* 24px * 1.35 */
    font-family: Agrandir;
    font-weight: 400;
    line-height: 35px; /* 25.92px * 1.35 */
    word-wrap: break-word;
}

.footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.profile {
    display: flex;
    align-items: center;
    gap: 10.8px; /* 8px * 1.35 */
}

.profile-icon {
    width: 38.475px; /* 28.5px * 1.35 */
    height: 38.475px; /* 28.5px * 1.35 */
    position: relative;
    background: rgba(0, 0, 0, 0.20);
    border-radius: 74.81px; /* 55.415px * 1.35 */
    overflow: hidden;
    border: 0.96px #645959 solid; /* 0.71px * 1.35 */
    backdrop-filter: blur(18.72px);
}

.icon {
    width: 20.23275px; /* 15.365px * 1.35 */
    height: 23.29425px; /* 17.255px * 1.35 */
    position: absolute;
    left: 8.65875px; /* 6.415px * 1.35 */
    top: 7.695px; /* 5.7px * 1.35 */
    background: white;
}

.profile-info {
    display: flex;
    flex-direction: column;
    gap: 5.4px; /* 4px * 1.35 */
}

.profile-name {
    color: white;
    font-size: 10.8px; /* 8px * 1.35 */
    font-family: Agrandir;
    font-weight: 800;
    line-height: 11.664px; /* 8.64px * 1.35 */
    word-wrap: break-word;
}

.profile-site {
    color: #808182;
    font-size: 10.8px; /* 8px * 1.35 */
    font-family: Agrandir;
    font-weight: 400;
    line-height: 11.664px; /* 8.64px * 1.35 */
    word-wrap: break-word;
}

.social-buttons {
    display: flex;
    gap: 10.8px; /* 8px * 1.35 */
}

.social-button {
    padding: 10.8px 21.6px; /* 8px * 1.35, 16px * 1.35 */
    background: rgba(50.71, 50.71, 50.71, 0.20);
    border-radius: 67.5px; /* 50px * 1.35 */
    border: 0.675px #424242 solid; /* 0.5px * 1.35 */
    backdrop-filter: blur(20px);
    display: flex;
    justify-content: center;
    align-items: center;
}

.social-text {
    color: white;
    font-size: 10.8px; /* 8px * 1.35 */
    font-family: Agrandir;
    font-weight: 800;
    text-decoration: underline;
    text-transform: uppercase;
    line-height: 10.8px; /* 8px * 1.35 */
    word-wrap: break-word;
}
</style>