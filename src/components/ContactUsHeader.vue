<template>
    <div class="container">
      <h1>
          Contact
      </h1>
    </div>
</template>

<script>
export default {
    name: "ContactUsHeader"
}
</script>

<style scoped>
  .container{
      display: flex;
      justify-content: center;
      align-items: center;
      height:50%;
      /*background: red;*/
  }
  h1{
      color: #FFF;
      font-family: 'Notable', sans-serif;
      font-size: 65px;
      font-style: normal;
      font-weight: 400;
      /*line-height: 170%; !* 153px *!*/
      text-transform: capitalize;
      margin: 0;
      text-align: start;
  }

  span{
      color: #616161;
  }

  /* Responsive adjustments for smaller screens */
  @media (max-width: 768px) {
     h1{
         font-size: 45px;
     }

      .container{
          height:fit-content;
      }

  }
</style>