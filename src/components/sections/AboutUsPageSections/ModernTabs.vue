<template>
    <div class="darkpage">
            <div class="contents">
                <div v-for="(tab, index) in tabs" :key="tab.id" class="accordions__item flip open" :class="{ 'right-margin': index % 2 === 0, 'left-margin': index % 2 !== 0 }">
                    <h2 class="front back">{{ tab.name }}</h2>
                    <p class="front back" v-for="paragraph in tab.content" :key="paragraph">{{ paragraph }}</p>
                </div>
            </div>
    </div>
</template> `

<script>
export default {
    name: 'ModernTabs',
    data() {
        return {
            activeTab: 'mission',
            tabs: [
                {
                    id: 'our mission',
                    title: 'Our Mission',
                    name: 'Mission',
                    imgSrc: 'https://example.com/images/mission.jpg', // Placeholder image URL
                    content: [
                        'At SEMPREstudios, our mission is to empower small businesses by providing top-notch digital solutions that enhance online presence and drive growth. We believe every small business deserves to shine online, regardless of its size or budget.',
                        'Our approach is tailored to meet the unique needs of each client, ensuring personalized and effective strategies that not only attract but also retain customers.'
                    ]
                },
                {
                    id: 'our values',
                    title: 'Our Values',
                    name: 'Values',
                    imgSrc: 'https://example.com/images/values.jpg', // Placeholder image URL
                    content: [
                        'Integrity, innovation, and commitment are the core values that define SEMPREstudios. We operate with transparency and always prioritize the interests of our clients.',
                        'We are committed to continuous improvement and staying ahead of industry trends to provide the best possible service to our clients.'
                    ]
                },
                {
                    id: 'our approach',
                    title: 'Kick Off',
                    name: 'Approach',
                    imgSrc: 'https://example.com/images/values.jpg', // Placeholder image URL
                    content: [
                        "Getting started smoothly is what we do best at SEMPREstudios. Choose the package that suits your business, and within 24 hours, our team will reach out. We're quick to connect because we believe in kicking things off without delay. This quick start helps us dive right into understanding your needs and setting the stage for your success."
                    ]
                }

            ],
        };
    },
    methods: {
        setActiveTab(tabId) {
            this.activeTab = tabId;
        }
    }
}
</script>

<style scoped>
.flip {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    animation: flipIn 0.6s forwards; /* Animation to flip on load */
}

@keyframes flipIn {
    from {
        transform: rotateY(0deg);
    }
    to {
        transform: rotateY(180deg);
    }
}

/* Counter-rotate the text inside the flip container */
.flip .front, .flip .back {
    transform: rotateY(180deg);
}

ul, li, p {
    color: #fff;
    font-size: 1.25em;
}

.darkpage {
    background: #000; /* Updated background color */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
}

.contents {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    min-height: fit-content;
    color: white;
    padding-bottom: 40px;
    width: 95%;
    gap: 15px; /* Added gap between items */
}

.accordions__item {
    background-color: #f3f3f3; /* Light background for items */
    border-radius: 10px;
    overflow: hidden;
    transition: 0.5s cubic-bezier(0.65, 0.2, 0.65, 1);
    box-shadow: 0 0.3125rem 0 0 #f3f3f3; /* Light shadow */
    border: 0.0625rem solid #f3f3f3; /* Light border */
    padding: 40px;
    margin-top: 30px;
    height: 70vh;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.open {
    background-color: black; /* Dark background when open */
}

ul, li, p{
    color: #fff;
    font-size: 1.25em;
}
.darkpage {
    background: #000; /* Updated background color */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
}

.sexytabs.dark > ul {
    text-align: center;
    font-weight: 500;
    margin: 50px 0 0;
    padding: 0;
    position: relative;
}

.sexytabs.dark > ul > li {
    display: inline-block;
    background: #000; /* Updated background color */
    padding: 0.6em 0;
    position: relative;
    width: 33%;
    margin: 0 0 0 -4px;
    cursor: pointer;
}

.contents {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    min-height: fit-content;
    color: white;
    padding-bottom: 40px;
    width: 95%;
    gap: 15px; /* Added gap between items */
}

img {
    width: 60px;
    float: left;
    margin: 0 1em 1em 0;
    border-radius: 3px;
}

h2 {
    clear: both;
}

* {
    box-sizing: border-box;
}

html, body {
    height: 700px;
    min-width: 320px;
    font-size: 16px;
    line-height: 1;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
button {
    cursor: pointer;
    color: inherit;
    background-color: transparent;
}
ul li {
    list-style: none;
}
h1, h2, h3, h4, h5, h6 {
    font-weight: inherit;
    font-size: inherit;
}

.accordions__item {
    background-color: #f3f3f3; /* Light background for items */
    border-radius: 10px;
    overflow: hidden;
    transition: 0.5s cubic-bezier(0.65, 0.2, 0.65, 1);
    box-shadow: 0 0.3125rem 0 0 #f3f3f3; /* Light shadow */
    border: 0.0625rem solid #f3f3f3; /* Light border */
    padding: 40px;
    margin-top: 30px;
    height: 70vh;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.open {
    background-color: black; /* Dark background when open */
}

@media (max-width: 768px) {
    .darkpage{
        height: fit-content;
    }
    li{
        font-size: 15px;
    }

    .contents{
        flex-direction: column;
    }

    .accordions__item{
        width: 100%;
        padding: 10px;
        height: fit-content;
    }
}

</style>