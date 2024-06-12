<template>
    <div class="card-container">
        <div class="card-image" :style="{ backgroundImage: 'url(' + img + ')' }"></div>
        <div class="card-content">
            <div class="card-title">
                <div class="card-title-text">{{ name }}</div>
            </div>
            <div class="card-button-container">
                <div class="card-button-flex">
                    <div class="card-button-text">Read more</div>
                    <div style="width: 16px; height: 16px; position: relative; flex-direction: column; justify-content: flex-start; align-items: flex-start; display: inline-flex">
                        <div style="width: 13.33px; height: 13.33px; background: #728095"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardComponent",
    props: {
        name: {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
/* Include the extracted styles here */
.card-container {
    width: 390px;
    padding: 24px;
    border-radius: 4px;
    overflow: hidden;
    border: 1px #A1AEBF solid;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    display: inline-flex;
}

.card-image {
    width: 100%;
    height: 142px;
    position: relative;
    background-size: cover;
    background-position: center;
    border-radius: 4px;
}

.card-content {
    align-self: stretch;
    height: 72px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    display: flex;
}

.card-title {
    align-self: stretch;
    height: 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    display: flex;
}

.card-title-text {
    align-self: stretch;
    color: white;
    font-size: 24px;
    font-family: 'Agrandir', sans-serif;
    font-weight: 700;
    line-height: 32px;
    word-wrap: break-word;
}

.card-button-container {
    border-radius: 8px;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
}

.card-button-flex {
    justify-content: center;
    align-items: center;
    gap: 4px;
    display: inline-flex;
}

.card-button-text {
    color: #728095;
    font-size: 16px;
    font-family: 'Agrandir', sans-serif;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.32px;
    word-wrap: break-word;
}

.card-button-icon-container {
    width: 20px;
    height: 20px;
    padding: 2px;
    justify-content: center;
    align-items: center;
    display: flex;
}

.card-button-icon {
    width: 16px;
    height: 16px;
    position: relative;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    display: flex;
}

.card-button-icon-inner {
    width: 13.33px;
    height: 13.33px;
    background: #728095;
}
</style>