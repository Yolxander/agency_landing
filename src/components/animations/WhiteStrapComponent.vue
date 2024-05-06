<template>
  <div class="strap">
      <div class="text-container">
          <!-- Duplicate the array to ensure continuity in the animation -->
          <div class="marquee">
              <p v-for="word in [...words, ...words]" :key="word" class="marquee-content">{{ word }}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "WhiteStrapComponent",
    data() {
        return {
            // Define the words array
            words: ['automation', 'web design & development', 'seo', 'marketing']
        };
    }
}
</script>

<style scoped>
  .strap{
      display: flex;
      width: 120vw;
      height: 15%;
      transform: rotate(-12.95deg);
      align-items: center;
      gap: 45px;
      flex-shrink: 0;border: 5px solid #000;
      background: #FFF;
      z-index: 0;
      position: absolute;
      bottom: 30%;
      left: -25px;
      overflow: hidden; /* Hide the overflow to create a continuous loop */
  }

  .text-container{
      color: #000;
      font-family: 'Audiowide', sans-serif;
      display: flex;
      margin-right: 60px;
      white-space: nowrap; /* Prevent wrapping of text */
  }

  .text-container p{
      border-top: 1px solid white;
      border-bottom: 1px solid white;
      width: fit-content;
      flex-shrink: 0;
      font-size: 80px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      text-transform: uppercase;
      padding-right: 40px;
      padding-left: 40px;
      margin: 0;
  }

  .marquee {
      display: flex; /* Use flexbox for a seamless continuous line of text */
      animation: marquee 30s linear infinite; /* Adjust the time for speed */
  }

  .marquee p {
      /* ... existing styles ... */
      margin: 0 20px; /* Adjust margin for spacing between words */
  }

  @keyframes marquee {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(0%); }

  }

</style>