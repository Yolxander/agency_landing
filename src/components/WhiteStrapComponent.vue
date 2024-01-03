<template>
  <div class="strap">
    <div class="text-container">
        <p>automation</p>
        <p>web design & development</p>
        <p>seo</p>
        <p>marketing</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "WhiteStrapComponent"
}
</script>

<style scoped>
  .strap{
      display: flex;
      width: 120vw;
      height: 59.031px;
      transform: rotate(-12.95deg);
      align-items: center;
      gap: 45px;
      flex-shrink: 0;border: 5px solid #000;
      background: #FFF;
      z-index: 10;
      position: absolute;
      bottom: 30%;
      left: -25px;
  }

  .text-container{
      color: #000;
      font-family: 'Audiowide', sans-serif;
      display: flex;
      margin-right: 60px;
  }

  .text-container p{
      border: 1px solid white;
      width: fit-content;
      height: 66.416px;
      flex-shrink: 0;
      font-size: 50px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-transform: uppercase;
      padding-right: 20px;
      padding-left: 20px;
  }
</style>