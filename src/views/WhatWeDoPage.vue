<template>
    <section class="hero">
      <div class="right-side">
          <ObserverComponent classToToggle="fadeInLeft" playOnce="true">
            <AboutUsHeader/>
          </ObserverComponent>
      </div>
        <div class="left-side" >
            <ObserverComponent classToToggle="fadeInLeft" playOnce="true">
              <p id="first_paragraph">
                <span>AYT</span> <span class="small-header">Studios</span> is a full-service digital agency. We can make all your digital dreams come true. As your dedicated digital partner, we focus on bringing your business's unique vision and goals to life online. Our approach is to blend creativity with technology, crafting a digital presence that captures your business’s essence and objectives in vibrant, effective digital narratives.              <br>
                <br>
                Join us at AYT Studios for a journey into the digital future. Our team is committed to creating engaging, seamless online experiences for your customers. Let's work together to elevate your business in the digital world, ensuring it's not just seen, but remembered.
              </p>
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
}

.right-side {
    width: 45%;
    height: 60vh;
    /*border: 1px solid white;*/
    /*background: #2c3e50;*/
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-right: 70px;
}


.left-side {
    width: 40%;
    height: fit-content;
    /*border: 1px solid white;*/
    /*background: #42b983;*/
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    font-size: 22px;
    color: #FFFFFF;
    text-align: right;
    padding-right: 40px;
}

.left-side #first_paragraph{
    width: 550px;
}

.left-side #second_paragraph {
    width: 300px;
}

.left-side #third_paragraph{
    width: 300px;
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

.left-side .small-header{
    font-size: 30px;
}


</style>