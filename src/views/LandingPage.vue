<template>
    <section class="hero">
        <nav>
            <div class="logo">
                <p>A</p>
                <p>Y</p>
            </div>
        </nav>
    </section>
</template>

<script>
export default {
    name: "LandingPage",

}
</script>

<style scoped>
    .hero{
        height: 100vh;
        width: 100vw;
        background-color: black;
    }

    .logo{
        width: 80px;
        display: flex;
    }
    .logo p{
        color: #FFF;
        /*font-family: 'Gugi', sans-serif;*/
        font-size: 80px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 10.48px;
    }
</style>