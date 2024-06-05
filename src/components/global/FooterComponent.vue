<template>
    <div class="container">
        <div class="footer-section">
            <div class="footer-column">
                <div class="footer-title">Company</div>
                <div class="footer-item">About us</div>
<!--                <div class="footer-item">Team</div>-->
<!--                <div class="footer-item">Careers</div>-->
            </div>
<!--            <div class="footer-column">-->
<!--                <div class="footer-title">Services</div>-->
<!--                <div class="footer-item">Branding</div>-->
<!--                <div class="footer-item">Web development</div>-->
<!--                <div class="footer-item">Digital marketing</div>-->
<!--                <div class="footer-item">Mobile app</div>-->
<!--                <div class="footer-item">SEO</div>-->
<!--                <div class="footer-item">User testing</div>-->
<!--            </div>-->
            <div class="footer-column">
                <div class="footer-title">Resources</div>
                <div class="footer-item">Blog</div>
                <div class="footer-item">Case study</div>
<!--                <div class="footer-item">Testimonials</div>-->
            </div>
            <div class="footer-column">
                <div class="footer-title">Follow us</div>
                <div class="footer-item">Instagram</div>
                <div class="footer-item">Figma</div>
            </div>
        </div>
        <div class="footer-credits">
            <div class="footer-credits-item">
                <div class="footer-credits-text">Created by SEMPRE Studios</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterComponent"
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 45vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    z-index: 3;
}

.footer-section {
    width: 88%;
    height: 20vh;
    justify-content: space-between;
    align-items: flex-start;
    display: inline-flex;
}

.footer-column {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    display: inline-flex;
}

.footer-title {
    color: white;
    font-size: 16px;
    font-family: 'Agrandir', sans-serif;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.32px;
    word-wrap: break-word;
}

.footer-item {
    border-radius: 8px;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
    color: rgba(255, 255, 255, 0.60);
    font-size: 16px;
    font-family: 'Archivo', sans-serif;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.32px;
    word-wrap: break-word;
}

.footer-logo-section {
    width: 400px;
    height: 153px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    display: inline-flex;
}

.footer-logo {
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    display: inline-flex;
}

.logo-icon {
    width: 38px;
    height: 42px;
    position: relative;
    background: linear-gradient(253deg, #9DE8EE 0%, #9DE8EE 0%, #FA7C0B 49%, #9F8CED 100%);
}

.logo-text {
    color: white;
    font-size: 16px;
    font-family: Agrandir;
    font-weight: 800;
    line-height: 17.28px;
    word-wrap: break-word;
}

.footer-subtitle {
    align-self: stretch;
    color: rgba(255, 255, 255, 0.60);
    font-size: 14px;
    font-family: 'Agrandir', sans-serif;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0.28px;
    word-wrap: break-word;
}

.footer-email {
    justify-content: flex-start;
    align-items: center;
    gap: 12.98px;
    display: inline-flex;
}

.email-input-wrapper {
    width: 260px;
    background: #0F0F0F;
    border-radius: 34px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: inline-flex;
}

.email-input {
    width: 100%;
    height: 43px;
    padding: 12.98px;
    border-radius: 24.34px;
    border: 1.62px #A1AEBF solid;
    font-size: 12.98px;
    font-family: 'Agrandir', sans-serif;
    font-weight: 400;
    line-height: 16.23px;
    letter-spacing: 0.26px;
    color: white;
}

.footer-credits {
    width: 1300px;
    height: 20px;
    justify-content: center;
    align-items: flex-start;
    gap: 24px;
    display: inline-flex;
}

.footer-credits-item {
    border-radius: 8px;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
}

.footer-credits-text {
    justify-content: center;
    align-items: center;
    gap: 4px;
    display: inline-flex;
    color: rgba(255, 255, 255, 0.60);
    font-size: 16px;
    font-family: 'Agrandir', sans-serif;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.32px;
    word-wrap: break-word;
}
</style>