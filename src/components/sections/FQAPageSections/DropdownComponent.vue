<template>
    <section class="process">
        <div class="process__container">
<!--            <div class="process__intro intro">-->
<!--                <h2 class="process__title title">Our Working Process</h2>-->
<!--                <div class="process__text text">Step-by-Step Guide to Achieving Your Business Goals</div>-->
<!--            </div>-->
            <div class="process__accordions">
                <ul class="accordions__list">
                    <li v-for="(item, index) in items" :key="index" class="accordions__item" :class="{ open: item.isOpen }">
                        <button class="accordions__control" @click="toggleItem(index)" :aria-expanded="item.isOpen.toString()">
                            <span class="accordions__number" :style="{ color: item.isOpen ? 'white' : '' }">{{ item.number }}</span>
                            <span class="accordions__title" :style="{ color: item.isOpen ? 'white' : '' }">{{ item.title }}</span>
                            <span class="accordions__icon desktop_visible"></span>
                        </button>
                        <div class="accordions__content text"
                             ref="contentRefs"
                             :style="{ maxHeight: item.isOpen ? `${item.scrollHeight}px` : null }"
                             :aria-hidden="item.isOpen.toString()">
                            <p>{{ item.content }}</p>
                        </div>
                        <button class="accordions__control mobile_visible" @click="toggleItem(index)" :aria-expanded="item.isOpen.toString()" >
                            <span class="accordions__icon"></span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    number: '01',
                    title: 'What services does your digital agency offer?',
                    content: 'Our agency specializes in a broad spectrum of digital services tailored for small to medium-sized businesses. These include web design and development, search engine optimization (SEO), social media management, and email marketing campaigns. Our goal is to help your business establish a strong online presence and drive growth.',
                    isOpen: false,
                    scrollHeight: 0
                },
                {
                    number: '02',
                    title: 'How does the process work when starting a project with your agency?',
                    content: 'The process begins with a consultation to understand your business goals and requirements. We then propose a customized strategy that includes a project timeline, deliverables, and a detailed quote. Once agreed upon, our team starts working on your project, keeping you updated with regular progress reports.',
                    isOpen: false,
                    scrollHeight: 0
                },
                {
                    number: '03',
                    title: 'How do you price your services?',
                    content: 'Our pricing is project-based, taking into consideration the scope of work, complexity, and the specific services required. We provide a detailed quote after our initial consultation. Rest assured, we aim to offer competitive pricing that aligns with your budget and business needs.',                    isOpen: false,
                    scrollHeight: 0
                },
                {
                    number: '04',
                    title: 'How does the process work when starting a project with your agency?',
                    content: 'The process begins with a consultation to understand your business goals and requirements. We then propose a customized strategy that includes a project timeline, deliverables, and a detailed quote. Once agreed upon, our team starts working on your project, keeping you updated with regular progress reports.',
                    isOpen: false,
                    scrollHeight: 0
                },
                {
                    number: '05',
                    title: 'How often can I expect updates about my project?',
                    content: 'We like to keep communication honest and straightforward; therefore, each week, you should receive an update regarding your venture. Nevertheless, if you want to have more frequent conversations with the person assigned as your manager throughout this time or even need us urgently at some point in between for anything else via email – feel free! ‘’Where there’s smoke there’s fire!’’ ‘’I gotcha back!’’’, said I.',
                    isOpen: false,
                    scrollHeight: 0
                },
            ]
        };
    },
    methods: {
        toggleItem(index) {
            this.items[index].isOpen = !this.items[index].isOpen;
            this.$nextTick(() => {
                if (this.$refs.contentRefs && this.$refs.contentRefs[index]) {
                    const contentElement = this.$refs.contentRefs[index];
                    this.items[index].scrollHeight = this.items[index].isOpen ? contentElement.scrollHeight : 0;
                }
            });
        }
    }
};
</script>

<style scoped>
/* Reset and base styles */
* {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
}
:focus, :active {
    outline: none;
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

/* Component specific styles */
.process {
    padding: 70px 0;
    font-family: "Space Grotesk", sans-serif;
    background-color: black; /* Dark background for the whole component */
}
.process__container {
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 15px;
}
.intro {
    display: flex;
    align-items: center;
    gap: 2.5rem;
}
.title {
    font-size: 40px;
    font-weight: 500;
    line-height: 127.5%;
    position: relative;
    text-transform: capitalize;
    display: inline-flex;
    padding: 0 7px;
}
.title::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #f3f3f3; /* Light background for the title */
    border-radius: 0.4375rem;
}
.text {
    font-size: 18px;
    line-height: 127%;
    color: #f3f3f3; /* Light text color for better readability on dark background */
}
.accordions__list {
    display: flex;
    flex-direction: column;
    gap: 1.8rem;
}
.accordions__item {
    background-color: #f3f3f3; /* Light background for items */
    border-radius: 2.8rem;
    overflow: hidden;
    transition: 0.5s cubic-bezier(0.65, 0.2, 0.65, 1);
    box-shadow: 0 0.3125rem 0 0 #f3f3f3; /* Light shadow */
    border: 0.0625rem solid #f3f3f3; /* Light border */
}
.accordions__control {
    display: flex;
    align-items: center;
    padding: 40px 60px;
    width: 100%;
    position: relative;
}
.accordions__number {
    font-size: 60px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    padding-right: 1.5625rem;
    font-weight: 500;
}
.accordions__title {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 30px;
    font-weight: 500;
    text-transform: capitalize;
    flex: 1 1 auto;
    display: flex;
    line-height: 120%;
    padding-right: 1.25rem;
    justify-content: flex-start;
    text-align: left;
}
.accordions__icon {
    flex: 0 0 58px;
    display: flex;
    width: 58px;
    height: 58px;
    background-color: black; /* Dark background for icons */
    border: 1px solid #f3f3f3; /* Light border for icons */
    border-radius: 50%;
    position: relative;
    transition: 0.5s cubic-bezier(0.65, 0.2, 0.65, 1);
}
.accordions__icon::before, .accordions__icon::after {
    content: "";
    width: 1.5625rem;
    height: 0.3125rem;
    background-color: #f3f3f3; /* Light color for icon lines */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.accordions__icon::after {
    transform: translate(-50%, -50%) rotate(90deg);
}
.accordions__content {
    padding: 0 60px;
    max-height: 0;
    overflow: hidden;
    transition: 0.5s cubic-bezier(0.65, 0.2, 0.65, 1);
    box-sizing: content-box;
    position: relative;
    z-index: 5;
}
.open .accordions__content {
    padding: 20px 60px 40px;
}
.open {
    background-color: black; /* Dark background when open */
}
.open .accordions__icon {
    transform: rotate(225deg);
}

.desktop_visible {
    display: block;
}

.mobile_visible{
    display: none;
}

@media (max-width: 768px) {
    .accordions__control{
        flex-direction: column;
        padding: 20px 40px;
    }

    .mobile_visible{
        display: block;
    }

    .desktop_visible {
        display: none;
    }


}
</style>