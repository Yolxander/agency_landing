<template>
    <div class="darkpage">
        <div class="sexytabs dark">
            <ul>
                <li v-for="tab in tabs" :key="tab.id" :class="{ 'ui-tabs-active': tab.id === activeTab }" @click="setActiveTab(tab.id)">
                    <a @click.prevent>
                        <span>{{ tab.title }}</span>
                    </a>
                </li>
            </ul>
            <div class="contents">
                <div v-for="tab in tabs" :key="tab.id" v-show="tab.id === activeTab" >
                    <h2>{{ tab.name }}</h2>
                    <p v-for="paragraph in tab.content" :key="paragraph">{{ paragraph }}</p>
                    <div class="accordions__content text"
                         ref="contentRefs">
                        <h2>{{ tab.name }}</h2>
                        <p v-for="paragraph in tab.content" :key="paragraph">{{ paragraph }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MinimalTabs',
    data() {
        return {
            activeTab: 'mission',
            tabs: [
                {
                    id: 'mission',
                    title: 'Our Mission',
                    name: 'Mission',
                    imgSrc: 'https://example.com/images/mission.jpg', // Placeholder image URL
                    content: [
                        'At SEMPREstudios, our mission is to empower small businesses by providing top-notch digital solutions that enhance online presence and drive growth. We believe every small business deserves to shine online, regardless of its size or budget.',
                        'Our approach is tailored to meet the unique needs of each client, ensuring personalized and effective strategies that not only attract but also retain customers.'
                    ]
                },
                {
                    id: 'values',
                    title: 'Our Values',
                    name: 'Values',
                    imgSrc: 'https://example.com/images/values.jpg', // Placeholder image URL
                    content: [
                        'Integrity, innovation, and commitment are the core values that define SEMPREstudios. We operate with transparency and always prioritize the interests of our clients.',
                        'We are committed to continuous improvement and staying ahead of industry trends to provide the best possible service to our clients.'
                    ]
                },
                {
                    id: 'approach',
                    title: 'Kick Off',
                    name: 'Approach',
                    imgSrc: 'https://example.com/images/values.jpg', // Placeholder image URL
                    content: [
                        "Getting started smoothly is what we do best at SEMPREstudios. Choose the package that suits your business, and within 24 hours, our team will reach out. We're quick to connect because we believe in kicking things off without delay. This quick start helps us dive right into understanding your needs and setting the stage for your success."
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
ul, li, p{
    color: #fff;
    font-size: 1.25em;
}
.darkpage {
    background: #000; /* Updated background color */
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 65vh;
}

.sexytabs {
    width: 85%;
    height: 100%;
}

.sexytabs.dark > ul {
    text-align: center;
    font-weight: 500;
    margin: 50px 0 0;
    padding: 0;
    position: relative;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5); /* Lighter border for better contrast */
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

.sexytabs.dark > ul > li.ui-tabs-active:before,
.sexytabs.dark > ul > li.ui-tabs-active:after {
    opacity: 1;
}

.sexytabs.dark > ul > li:before {
    content: "";
    position: absolute;
    z-index: -1;
    box-shadow: 0 2px 3px rgba(255, 255, 255, 0.2); /* Lighter shadow for better contrast */
    top: 50%;
    bottom: 0px;
    left: 5px;
    right: 5px;
    border-radius: 100px / 10px;
}

.sexytabs.dark > ul > li.ui-tabs-active:after {
    content: "";
    background: #000; /* Only show when active */
    position: absolute;
    width: 12px;
    height: 12px;
    left: 50%;
    bottom: -6px;
    margin-left: -6px;
    transform: rotate(45deg);
    box-shadow: inset 3px 3px 3px rgba(255, 255, 255, 0.2), inset 1px 1px 1px rgba(255, 255, 255, 0.3); /* Lighter inset shadow for better contrast */
}

.contents {
    min-height: 200px;
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

@media (max-width: 768px) {
  .darkpage{
      height: fit-content;
  }
    li{
        font-size: 15px;
    }
}

</style>