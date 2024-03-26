<template>
    <section class="hero">
      <div class="right-side">
          <ObserverComponent classToToggle="fadeInLeft" playOnce="true">
            <AboutUsHeader/>
          </ObserverComponent>
      </div>
        <div class="left-side">
          <p id="first_paragraph">
              <span>AYT</span> <span class="small-header">Studios</span>  is a full service digital agency. we can make all your digital dreams come true.
          </p>
          <p id="second_paragraph">
              web design & developement, mobile apps and automation
          </p>
          <p id="third_paragraph">
              web design & developement, mobile apps and automation
          </p>
        </div>
    </section>
</template>
<script>

import AboutUsHeader from "@/components/AboutUsHeader.vue";
import ObserverComponent from "@/components/IntersectionObserver.vue";

export default {
    name: "ServicesPage",
    components: {ObserverComponent, AboutUsHeader},
}
</script>

<style scoped>
.hero{
    height: 80vh;
    width: 100vw;
    background-color: black;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
}

.right-side {
    width: 45%;
    height: 70vh;
    /*border: 1px solid white;*/
    /*background: #2c3e50;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 40px;
}


.left-side {
    width: 40%;
    height: 50vh;
    /*border: 1px solid white;*/
    /*background: #42b983;*/
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    margin-right: 70px;
    font-size: 22px;
    color: #FFFFFF;
    text-align: right;
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