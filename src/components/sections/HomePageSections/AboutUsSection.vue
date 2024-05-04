<template>
    <div class="hero">
      <div class="right-side">
          <ObserverComponent classToToggle="fadeInLeft" :playOnce="true">
              <DynamicHeader :header="header"/>
          </ObserverComponent>
      </div>
        <div class="left-side" >
            <ObserverComponent classToToggle="fadeInLeft" :playOnce="true">
              <p id="first_paragraph">
                <span>SEMPRE</span> <span class="small-header">studios</span>is a digital agency that offers a wide range of services. We can do anything with the help of technology. We will make your wildest digital dreams come true. As your digital partner, our aim is to create for you an online reflection of your business’s unique vision and who you are.        <br>
                <br>

                  Our method at SEMPRE studios is combining creative ideas with technology in order to provide lively and effective digital narratives that represent brands well
              </p>
            </ObserverComponent>
           <LearnMoreButton @click="$router.push('/about-us')"   />
        </div>

    </div>
</template>
<script>

import DynamicHeader from "@/components/headers/DynamicHeader.vue";
import ObserverComponent from "@/components/animations/IntersectionObserver.vue";
import LearnMoreButton from "@/components/buttons/LearnMoreButton.vue";

export default {
    name: "AboutUsPage",
    components: {
        LearnMoreButton,
        ObserverComponent,
        DynamicHeader
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
    height: 70vh;
    width: 100vw;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content:center;
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