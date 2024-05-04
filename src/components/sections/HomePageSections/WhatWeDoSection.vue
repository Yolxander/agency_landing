<template>
    <section class="hero">
      <div class="right-side">
          <ObserverComponent classToToggle="fadeInLeft" :playOnce="true">
            <DynamicHeader :header="header"/>
          </ObserverComponent>
      </div>
        <div class="left-side" >
            <ObserverComponent classToToggle="fadeInLeft" :playOnce="true">
                <ul class="list">
                    <li v-for="service in services" :key="service.name">
                        <span>{{ service.name }}</span> - {{ service.description }}
                    </li>
                </ul>
            </ObserverComponent>
              <SeeAllButton @click="$router.push('/services')" />
        </div>
    </section>
</template>
<script>

import DynamicHeader from "@/components/headers/DynamicHeader.vue";
import ObserverComponent from "@/components/animations/IntersectionObserver.vue";
import SeeAllButton from "@/components/buttons/SeeAllButton.vue";

export default {
    name: "WhatWeDoPage",
    components: {
        SeeAllButton,
        ObserverComponent,
        DynamicHeader
    },
    data() {
        return {
            header: {
                part1: "What",
                part2: "we do ?",
            },
            services: [
                { name: 'Web Development and Design', description: 'Offering custom website creation with responsive design for optimal user experience across all devices.' },
                { name: 'Booking and Scheduling', description: 'Streamline appointment bookings with an automated scheduling system and reminders....' },
                { name: 'Hosting and Domain Services', description: 'Reliable web hosting and domain registration services to ensure your website is always accessible and running smoothly.' },
                // { name: 'Online Lead Generation', description: 'Boost lead capture with custom online forms and a quote generator, optimizing your CRM process.' },
            ],
        }
    }
}
</script>

<style scoped>
.hero{
    height: 75vh;
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
    margin-top: 20px;
}


.left-side {
    width: 40%;
    height:  fit-content;
    /*background: #42b983;*/
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 22px;
    color: #FFFFFF;
    text-align: left;
    margin-left: 40px;
    margin-top: 50px;
}

.left-side ul{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /*background: red;*/
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

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {
    .hero {
        flex-direction: column;
        height: 85vh;
    }

    .left-side, .right-side {
        width: 95%;
        margin-right: 0;
        font-size: 20px;
        color: #FFFFFF;
        text-align: center;
        display: flex;
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

    .left-side{
        padding-left: 0px;
        padding-top: 0px;
      margin: 0px;
        height: fit-content;
    };

    .left-side list{
        width: 85%;
    }


}


/* Responsive adjustments for smaller screens */
@media (max-width: 375px) {
    .hero {
       padding-bottom: 30px;
    }

    .left-side, .right-side {
        font-size: 15px;
    }

    .right-side{
        height: fit-content;
    }
}
</style>