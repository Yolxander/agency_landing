<template>
    <nav>
        <LogoComponent />
        <div class="right-side">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 84 84" fill="none">
                <g clip-path="url(#clip0_106_150)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M42 61.3432C52.5049 61.3432 61.0208 52.8272 61.0208 42.3223C61.0208 31.8174 52.5049 23.3015 42 23.3015C31.4951 23.3015 22.9792 31.8174 22.9792 42.3223C22.9792 52.8272 31.4951 61.3432 42 61.3432ZM42 66.5307C55.3699 66.5307 66.2083 55.6922 66.2083 42.3223C66.2083 28.9524 55.3699 18.114 42 18.114C28.6301 18.114 17.7917 28.9524 17.7917 42.3223C17.7917 55.6922 28.6301 66.5307 42 66.5307Z" fill="#FFFEFE"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M83.5 42.3223C83.5 43.7548 82.3387 44.9161 80.9062 44.9161L72.2604 44.9161C70.8279 44.9161 69.6667 43.7548 69.6667 42.3223C69.6667 40.8898 70.8279 39.7286 72.2604 39.7286L80.9062 39.7286C82.3387 39.7286 83.5 40.8898 83.5 42.3223ZM14.3333 42.3223C14.3333 43.7548 13.1721 44.9161 11.7396 44.9161H3.09375C1.66126 44.9161 0.5 43.7548 0.5 42.3223C0.5 40.8898 1.66126 39.7286 3.09375 39.7286H11.7396C13.1721 39.7286 14.3333 40.8898 14.3333 42.3223Z" fill="#FFFEFE"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M71.3445 12.9778C72.3575 13.9907 72.3574 15.633 71.3445 16.6459L65.231 22.7594C64.2181 23.7724 62.5758 23.7724 61.5629 22.7594C60.55 21.7465 60.55 20.1042 61.5629 19.0913L67.6764 12.9778C68.6893 11.9649 70.3316 11.9649 71.3445 12.9778ZM22.4363 61.886C23.4492 62.8989 23.4492 64.5412 22.4363 65.5541L16.3228 71.6677C15.3099 72.6806 13.6676 72.6806 12.6547 71.6677C11.6417 70.6547 11.6417 69.0125 12.6547 67.9995L18.7682 61.886C19.7811 60.8731 21.4234 60.8731 22.4363 61.886Z" fill="#FFFEFE"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M42 0.822327C43.4325 0.822327 44.5938 1.98359 44.5938 3.41608L44.5937 12.0619C44.5937 13.4944 43.4325 14.6557 42 14.6557C40.5675 14.6557 39.4062 13.4944 39.4062 12.0619L39.4062 3.41608C39.4062 1.98359 40.5675 0.822326 42 0.822327ZM42 69.989C43.4325 69.989 44.5938 71.1503 44.5938 72.5827V81.2286C44.5938 82.6611 43.4325 83.8223 42 83.8223C40.5675 83.8223 39.4062 82.6611 39.4062 81.2286V72.5827C39.4062 71.1503 40.5675 69.989 42 69.989Z" fill="#FFFEFE"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6555 12.9778C13.6684 11.9649 15.3107 11.9649 16.3236 12.9778L22.4371 19.0913C23.45 20.1043 23.45 21.7465 22.4371 22.7594C21.4242 23.7724 19.7819 23.7724 18.769 22.7594L12.6555 16.6459C11.6426 15.633 11.6426 13.9907 12.6555 12.9778ZM61.5637 61.886C62.5766 60.8731 64.2189 60.8731 65.2318 61.886L71.3453 67.9995C72.3583 69.0125 72.3583 70.6547 71.3453 71.6677C70.3324 72.6806 68.6901 72.6806 67.6772 71.6677L61.5637 65.5541C60.5508 64.5412 60.5508 62.8989 61.5637 61.886Z" fill="#FFFEFE"/>
                </g>
                <defs>
                    <clipPath id="clip0_106_150">
                        <rect width="83" height="83" fill="white" transform="translate(0.5 0.822327)"/>
                    </clipPath>
                </defs>
            </svg>

            <span class="divider">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="180" viewBox="0 0 11 161" fill="none">
                  <path d="M5.5 0.322327V160.322" stroke="url(#paint0_radial_104_16)" stroke-width="10"/>
                  <defs>
                    <radialGradient id="paint0_radial_104_16" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6 80.3223) rotate(90) scale(80 0.5)">
                      <stop offset="0.375" stop-color="white"/>
                      <stop offset="0.567708" stop-color="white" stop-opacity="0"/>
                    </radialGradient>
                  </defs>
                </svg>
            </span>

            <MenuButton />
        </div>
    </nav>

</template>

<script>
import MenuButton from "@/components/MenuButton.vue";
import LogoComponent from "@/components/LogoComponent.vue";

export default {
    name: "NavBarComponent",
    components: {LogoComponent, MenuButton}
}
</script>

<style scoped>
  nav {
      display: flex;
      justify-content: space-between;
      height: 25vh;
      padding-right: 70px;
      padding-left: 70px;
      background: black;
  }

  .divider{
      color: #FFFFFF;
      cursor: pointer;
  }

  .right-side{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 20%;
  }

</style>