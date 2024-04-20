<template>
    <div class="container">
      <h1>
          LET’S BUILD <span>DIGITAL</span>
      </h1>
    </div>
</template>

<script>
export default {
    name: "CallToAction"
}
</script>

<style scoped>
.container{
    display: flex;
    justify-content: center;
    align-items: start;
    height: fit-content;
}
h1{
    color: #FFF;
    font-family: 'Notable', sans-serif;
    font-size: 60px; /* Default size for larger screens */
    font-style: normal;
    font-weight: 400;
    line-height: 170%; /* Adjust if necessary for mobile */
    text-transform: capitalize;
    width: 700px; /* Consider making this more responsive */
    margin: 0;
    text-align: start;
}

span{
    color: #616161;
}

.container{
    overflow-x: hidden;
}

/* Responsive adjustments for smaller screens */
@media (max-width: 768px) {

    h1{
        position: absolute;
        bottom: 60%;
        right: 20%;
        font-size: 45px; /* Smaller font size for mobile */
        width: 60%; /* Make the width more responsive */
        line-height: 100%; /* Adjust line-height for better readability */
    }
}

</style>
