<template>
    <div class="darkpage">
            <div class="contents">
                <div v-for="(tab, index) in tabs" :key="tab.id" class="card card-brutalism flip open" :class="{ 'right-margin': index % 2 === 0, 'left-margin': index % 2 !== 0 }">
                    <div class="card-header">
                        <h2>{{ tab.name }}</h2>
                    </div>

                    <div class="card-content">
                        <p v-for="paragraph in tab.content" :key="paragraph">{{ paragraph }}</p>
                    </div>
                </div>
            </div>
    </div>
</template>

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
                        'At SEMPREstudios, we want to make digital success possible for small businesses everywhere. We aim to do this by providing cheap yet effective digital solutions which will break down all the barriers towards online growth. We know what it’s like when you’re running a small business in the digital age – sometimes there just isn’t enough money for everything that needs doing! ',
                        "We work out our strategies basing on different types of small business’ in various industries because they’ve got one thing in common – limited resources. Our dreams are big so our prices are low – we want your company thrive online without any financial strain."
                    ]

                },

                {
                    id: 'our values',
                    title: 'Core Principles: Innovation & Support',
                    name: 'Core Principles',
                    imgSrc: 'https://example.com/images/values.jpg', // Placeholder image URL
                    content: [
                        'Our basic principles at SEMPREstudios are innovation, support and empowerment. For us, small businesses come first; this is why we provide them with strong digital services that can work well even with low investment. We make our services scalable and flexible so that all companies could take advantage of technology whether they are just starting or already established enterprises.',
                        'We believe in the transformative power of digital technology to enhance operational efficiency, increase market visibility, and foster opportunities for exponential growth.Through our efforts, we aim to inspire a wave of innovation and resilience across the small business sector'
                    ]
                },
                {
                    id: 'our approach',
                    title: 'Our Approach',
                    name: 'Approach',
                    imgSrc: 'https://example.com/images/values.jpg', // Placeholder image URL
                    content: [
                        "We know very well that time is money for small businesses. Choose a service package that suits your needs and wallet. We prioritize a quick start that is easy to follow through, making sure we understand your business needs and goals right away.",
                        "Our way of doing things is participatory and practical. We collaborate with you closely so as to come up with digital strategies which are not only affordable but also capable of yielding tangible results.From there on cheap yet effective solutions become the foundation upon which online triumphs for your enterprise are built at large thereby enabling optimization of returns made out of investments in technology."
                    ]
                }
            ]
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
/* Font and other global styles */
:root {
    --border-width: 5px;
    --border-radius: 5px;
}

.flip {
    position: relative;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transform-style: preserve-3d;
    transition: transform 0.6s;
    animation: flipIn 0.6s forwards; /* Animation to flip on load */
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
    width: 90%;
    gap: 15px; /* Added gap between items */
}


h2 {
    clear: both;
}

* {
    box-sizing: border-box;
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

.card-brutalism {
    border: 2px solid black; /* Adjusted for visibility on dark bg */
    box-shadow: 8px 8px 0px 0px rgba(255, 255, 255, 0.7);; /* Adjusted for visibility */
    border-radius: 8px;
    overflow: hidden;
    background-color: black; /* Ensuring text visibility */
    color: white; /* Text color for visibility */
    height: fit-content;
}

.card-header {
    min-height: 40px;
    border-bottom: var(--border-width) solid white; /* Adjusted for visibility */
    background: white;
    color: black;
}

.card-header h2 {
    margin: 0;
    padding: 10px;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 28px;
}

.card-img img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
}

.card-content {
    padding: 15px;
}


/* Responsive adjustments */
@media (max-width: 768px) {
    .darkpage {
        height: fit-content;
    }
    .contents {
        flex-direction: column;
    }
    .card-brutalism {
        width: 100%;
        padding: 10px;
        height: fit-content;
    }
}

</style>