<template>
    <div class="hero">
      <div class="right-side">
          <ObserverComponent classToToggle="fadeInLeft" playOnce="true">
              <AboutUsHeader :header="header"/>
          </ObserverComponent>
      </div>
        <div class="left-side" >
            <ObserverComponent classToToggle="fadeInLeft" playOnce="true">
              <p id="first_paragraph">
                <span>SEMPRE</span> <span class="small-header">studios</span> is a full-service digital agency. We can make all your digital dreams come true. As your dedicated digital partner, we focus on bringing your business's unique vision and goals to life online. Our approach is to blend creativity with technology, crafting a digital presence that captures your business’s essence and objectives in vibrant, effective digital narratives.              <br>
                <br>
                Join us at SEMPRE studios for a journey into the digital future. Our team is committed to creating engaging, seamless online experiences for your customers. Let's work together to elevate your business in the digital world, ensuring it's not just seen, but remembered.
            </p>
            </ObserverComponent>
           <LearnMoreButton @click="$router.push('/about-us')"   />
        </div>

    </div>
</template>
<script>

import AboutUsHeader from "@/components/headers/AboutUsHeader.vue";
import ObserverComponent from "@/components/animations/IntersectionObserver.vue";
import LearnMoreButton from "@/components/buttons/LearnMoreButton.vue";

export default {
    name: "AboutUsPage",
    components: {
        LearnMoreButton,
        ObserverComponent,
        AboutUsHeader
    },
    data() {
        return {
            header: {
                part1: "Who",
                part2: "we are ?",
            },
        }
    }

}
</script>

<style scoped>
.hero{
    height: 80vh;
    width: 100vw;
    background-color: black;
    display: flex;
    flex-direction: row;
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
    padding-right: 40px;
}


.left-side {
    width: 40%;
    height: fit-content;
    /*border: 1px solid white;*/
    /*background: #42b983;*/
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-right: 70px;
    margin-top: 20px;
    font-size: 22px;
    color: #FFFFFF;
    text-align: left;
}

.left-side #first_paragraph{
    width: 550px;
}


.left-side p span{
    color: #FFF;
    font-family: 'Gugi', sans-serif;
    font-size:45px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
}

.left-side .small-header{
    font-size: 25px;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
    .hero {
      flex-direction: column;
        height: 90vh;
        padding-top: 0;
    }

    .left-side{
        margin-top: 0;
    }

    .left-side #first_paragraph{
        width: 100%;
    }


    .left-side, .right-side {
      width: 95%;
        margin-right: 0;
        font-size: 20px;
        color: #FFFFFF;
        text-align: center;
        display: flex;
    }

    .left-side p span {
        font-size: 40px;
    }

    .right-side {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-right: 0px;
    }

    p{
        margin: 0;
    }


}

@media (max-width: 375px) {
    .hero {
        height: 65vh;
    }

    .left-side, .right-side {
        font-size: 15px;
    }
}

</style>