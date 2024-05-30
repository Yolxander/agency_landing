<template>
    <div class="text-container">
        <div class="text-block">
            <div class="headline">

                <span class="white-text fade-in-delayed-3">is getting a new</span>
                <span class="highlight-text fade-in-delayed-3"> look</span>
            </div>
            <div class="subtext-container fade-in-delayed-4">
                <p> Our site is getting an upgrade with another look. Leave your email and we will contact you soon.</p>
            </div>
        </div>
        <form class="input-container ease-in">
            <div class="input-box">
                <div class="input-inner-box">
                    <input type="text" class="input-text" placeholder="Email" />
                </div>
            </div>
            <button type="submit" class="button">
                <div class="button-text">Contact</div>
            </button>
        </form>
    </div>
</template>


<script>
export default {
    name: "MainHeaderWithForm"
}
</script>

<style scoped>
.text-container {
    height: fit-content;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:25px;
    margin-top: 20px;
}

.text-block {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;
}

.headline {
    width: 100%;
    text-align: center;
}

.header {
    font-family: 'Gugi', sans-serif;
    font-size: 60px;
    font-weight: 700;
    line-height: 80px;
    word-wrap: break-word;
    color: white;
}

.white-text {
    color: white;
    font-size: 65px;
    font-weight: 700;
    line-height: 80px;
    word-wrap: break-word;
}

.highlight-text {
    color: #FFA800;
    font-size: 65px;
    font-weight: 700;
    line-height: 80px;
    word-wrap: break-word;
}

.subtext-container {
    align-self: stretch;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}
.subtext-container p {

    color: rgba(255, 255, 255, 0.60);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.32px;
    word-wrap: break-word;;
    text-align: start;
    width: 84%;
}

.input-container {
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    opacity: 0;
    animation: ease-in 2s forwards;
    animation-delay: 2s;
}

.input-box {
    flex: 1;
    background: #0F0F0F;
    border-radius: 4px;
    display: inline-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}

.input-inner-box {
    align-self: stretch;
    height: 52px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 4px;
}

.input-inner-box > input {
    align-self: stretch;
    padding: 16px;
    border-radius: 30px;
    border: 2px #A1AEBF solid;
    background: none;
    color: white;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.32px;
    word-wrap: break-word;
}

.button {
    width: 111px;
    align-self: stretch;
    padding: 12px 24px;
    background: #FFA800;
    border-radius: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: none;
    cursor: pointer;
}

.button-text {
    color: black;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    word-wrap: break-word;
}
.ease-in{
    animation-delay: 4s;
}
.fade-in {
    opacity: 0;
    animation: fade-in 1s forwards;
    animation-delay: 2s;
}

.fade-in-delayed-3{
    opacity: 0;
    animation: fade-in 1s forwards;
    animation-delay: 3s;
}

.fade-in-delayed-4 {
    opacity: 0;
    animation: fade-in 1s forwards;
    animation-delay: 4s;
}

@keyframes fade-in {
    to {
        opacity: 1;
    }
}

@keyframes ease-in {
    to {
        opacity: 1;
    }
}
/* Mobile Styles */
@media (max-width: 768px) {
    .text-container{
        left: 0px;
        top: 155px;
        width: 50%;
    }
    .header{
        font-size: 30px;
    }
    .white-text{
        font-size: 30px;
    }
    .highlight-text{
        font-size: 30px;
    }

    .headline {
        width: 90%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .header {
        line-height: 40px;
    }

    .white-text {
        line-height: 40px;
    }

    .highlight-text {
        line-height: 40px;
    }

    .subtext-container{
        width: 80%;
        padding-right: 20px;
        padding-left: 20px;
    }
    .subtext{
        text-align: center;
        font-size: 16px;
    }

    .input-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .text-block {
        width: 100%;
    }

    .input-inner-box > input {
        padding: 14px;
    }
}

@media (max-width: 450px) {
    .text-container {
        left: 0px;
    }

    .input-container{
        width: 90%;
    }
    .button{
        align-self: inherit;
    }
}

@media (max-width: 375px) {

    .input-container{
        width: 90%;
    }
}
</style>

