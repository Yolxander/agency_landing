<template>
    <div class="container">
      <h1>
         {{ header.part1 }} <span><br>{{ header.part2 }}</span>
      </h1>
    </div>
</template>

<script>
export default {
    name: "AboutUsHeader",
    props: {
        header: {
            required: true,
        },
    },
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
      font-size: 65px;
      font-style: normal;
      font-weight: 400;
      line-height: 170%; /* 153px */
      text-transform: capitalize;
      width: 500px;
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
          width: 100%;
      }
  }

  @media (max-width: 568px) {
      h1{
          font-size: 35px;
      }

      .left-side p{
          font-size:15px
      }
  }
</style>