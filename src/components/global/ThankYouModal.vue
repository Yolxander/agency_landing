<template>
    <div class="modal-container">
        <div class="header">
            <span class="header-text">Thank you for leaving your email. <span class="header-highlight">We'll be in touch soon.</span></span>
        </div>
        <div class="divider"></div>
        <div class="support-text">We appreciate your interest and will keep you updated.</div>
        <div class="divider"></div>
        <div class="footer">
            <div class="profile">
                <div class="profile-icon">
                    <div class="icon">S</div>
                </div>
                <div class="profile-info">
                    <div class="profile-name">SEMPREStudios</div>
                    <div class="profile-site">SEMPREStudios.com</div>
                </div>
            </div>
            <div class="social-buttons">
                <div class="social-button">
                    <div class="social-text">Go Back</div>
                </div>
                <div class="social-button">
                    <div class="social-text">Learn More</div>
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
    height: fit-content;
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
    margin-bottom: 40px;
}

.header {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.header-text, .header-highlight {
    color: white;
    font-size: 48px; /* 48px * 1.35 */
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
    font-size: 30.4px; /* 24px * 1.35 */
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
    background: transparent;
    font-family: 'Gugi', sans-serif;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
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
    cursor: pointer;
}

.social-button {
    padding: 10.8px 21.6px; /* 8px * 1.35, 16px * 1.35 */
    background: rgba(50.71, 50.71, 50.71, 0.20);
    border-radius: 67.5px; /* 50px * 1.35 */
    border: 0.675px #FFA800 solid; /* 0.5px * 1.35 */
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

.social-button:hover {
    background: #FFA800;
}

.social-button:hover .social-text {
    color: black;
    text-decoration: none;
}
@media (max-width: 750px) {
    .modal-container {
        width: 80%;
        height: fit-content;
        gap: 20px;
    }

    .header-text, .header-highlight{
        font-size: 10vw;
    }

    .support-text{
        font-size: 8vw;
    }
    .profile{
        display: none;
    }

    .social-buttons{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
}
</style>