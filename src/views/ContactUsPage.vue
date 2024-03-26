<template>
    <section class="hero">
        <ContactUsHeader />
        <div class="bottom-content">
            <div class="right-side">
                <p>
                    Whatever you’ve got going on,
                    we’re keen to here about it
                </p>
            </div>
            <div class="left-side" >
               <ContactForm />
            </div>
        </div>

    </section>
</template>
<script>


import ContactUsHeader from "@/components/ContactUsHeader.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
    name: "ContactUsPage",
    components: {ContactForm, ContactUsHeader},
}
</script>

<style scoped>
.hero{
    height: 80vh;
    width: 100vw;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 50px;
}

.bottom-content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /*background-color: blue;*/
}

.right-side {
    width: 45%;
    height: 80%;
    /*border: 1px solid white;*/
    /*background: #2c3e50;*/
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: end;
    padding-right: 40px;
    font-size: 35px;
    color: #FFFFFF;
    text-align: left;
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
    margin-right: 70px;
    font-size: 22px;
    color: #FFFFFF;
    text-align: left;
}

.right-side p{
    width: 550px;
}

.left-side #second_paragraph {
    width: 300px;
}

.left-side #third_paragraph{
    width: 300px;
}



.left-side .small-header{
    font-size: 30px;
}


</style>