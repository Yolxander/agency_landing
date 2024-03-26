<template>
    <section class="hero">
      <div class="right-side">
          <ObserverComponent classToToggle="fadeInLeft" playOnce="true">
            <AboutUsHeader :header="header"/>
          </ObserverComponent>
      </div>
        <div class="left-side" >
            <ObserverComponent classToToggle="fadeInLeft" playOnce="true">
                <ul>
                    <li v-for="service in services" :key="service.name">
                        <span>{{ service.name }}</span> - {{ service.description }}
                    </li>
                </ul>
            </ObserverComponent>
        </div>
    </section>
</template>
<script>

import AboutUsHeader from "@/components/AboutUsHeader.vue";
import ObserverComponent from "@/components/IntersectionObserver.vue";

export default {
    name: "WhatWeDoPage",
    components: {
        ObserverComponent,
        AboutUsHeader
    },
    data() {
        return {
            header: {
                part1: "What",
                part2: "we do ?",
            },
            services: [
                { name: 'Automation', description: 'Harness the power of technology to streamline your operations and increase efficiency.' },
                { name: 'Web Design & Development', description: 'Create stunning, user-friendly websites that drive engagement and conversions.' },
                { name: 'SEO', description: 'Improve your online visibility and rank higher on search engine results pages.' },
                { name: 'Marketing', description: 'Craft compelling marketing strategies that connect with your audience and amplify your brand.' },
            ],
        }
    }
}
</script>

<style scoped>
.hero{
    height: 70vh;
    width: 100vw;
    background-color: black;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding-top: 70px;
}

.right-side {
    width: 43%;
    height: 60vh;
    /*border: 1px solid white;*/
    /*background: #2c3e50;*/
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
}


.left-side {
    width: 40%;
    height: 60vh;
    /*border: 1px solid white;*/
    /*background: #42b983;*/
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 22px;
    color: #FFFFFF;
    text-align: left;
    padding-left: 40px;
    padding-top: 50px;
}

.left-side ul{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.left-side ul span{
    font-family: 'Audiowide', sans-serif;
}

.left-side p span{
    color: #FFF;
    font-family: 'Gugi', sans-serif;
    font-size:55px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
}


</style>