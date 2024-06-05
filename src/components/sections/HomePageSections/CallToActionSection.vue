<template>
    <div class="container">
        <div class="cta-box">
            <div class="cta-content">
                <div class="cta-header">
                    <div class="cta-title">Let’s discuss the idea</div>
                    <div class="cta-description-wrapper">
                        <div class="cta-description">Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta feugiat scelerisque in elit.</div>
                    </div>
                </div>
                <form class="cta-form">
                    <div class="email-input-wrapper">
                        <div class="email-input">
                            <input type="email" class="email-input-inner" placeholder="Your email" />
                        </div>
                    </div>
                    <button type="submit" class="send-button">
                        <div class="send-button-text">Send</div>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CallToActionSection"
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 75vh;
    background: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
}

.cta-box {
    width: 85%;
    height: 40%;
    padding: 80px 32px;
    background: #FFB219;
    border-radius: 4px;
    border: 1px #A1AEBF solid;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.cta-content {
    align-self: stretch;
    height: 204px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 32px;
}

.cta-header {
    align-self: stretch;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 16px;
}

.cta-title {
    align-self: stretch;
    text-align: center;
    color: #0D0E14;
    font-size: 40px;
    font-family: 'Agrandir', sans-serif;
    font-weight: 700;
    line-height: 56px;
    word-wrap: break-word;
}

.cta-description-wrapper {
    align-self: stretch;
    padding: 0 120px;
    display: inline-flex;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
}

.cta-description {
    width: 511px;
    text-align: center;
    color: rgba(0, 0, 0, 0.60);
    font-size: 16px;
    font-family: 'Agrandir', sans-serif;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.32px;
    word-wrap: break-word;
}

.cta-form {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
}

.email-input-wrapper {
    width: 320px;
    background: #FBFDFE;
    border-radius: 43px;
    overflow: hidden;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.email-input {
    align-self: stretch;
    height: 52px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
}

.email-input-inner {
    align-self: stretch;
    padding: 16px;
    border-radius: 30px;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
}

.email-input-text {
    flex: 1 1 0;
    height: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
    color: #0D0E14;
    font-size: 16px;
    /*font-family: Archivo;*/
    font-family: 'Agrandir', sans-serif;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.32px;
    word-wrap: break-word;
}

.send-button {
    padding: 15px 24px;
    background: black;
    border-radius: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    border: none;
}

.send-button-text {
    color: white;
    font-size: 14px;
    font-family: 'Agrandir', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    word-wrap: break-word;
}

/* Mobile Styles */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }

    .cta-description-wrapper{
        padding: 0;
    }

    .cta-description {
        width: 100%;
    }

    .cta-content {
         align-self: unset;
        width: 100%;
        height: 40vh;
    }

    .cta-header{
        height: fit-content;
    }
    .cta-form{
        flex-direction: column;
    }

}
</style>