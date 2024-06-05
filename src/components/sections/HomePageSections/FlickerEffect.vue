<template>
    <div>
        <div class="flickerContainer" ref="flickerContainer">
            <!-- text generated with JS -->
            <p class="flicker flickerContainerText" style="transition-duration: 0s;">S</p>
            <p class="flicker flickerContainerText" style="transition-duration: 0s;">E</p>
            <p class="flicker flickerContainerText" style="transition-duration: 0s;">M</p>
            <p class="flicker flickerContainerText" style="transition-duration: 0s;">P</p>
            <p class="flicker flickerContainerText" style="transition-duration: 0s;">R</p>
            <p class="flicker flickerContainerText" style="transition-duration: 0s;">E</p>
            <p class="flicker flickerContainerText" style="transition-duration: 0s;"> </p>
          <span style="color: black">---</span>
            <p class="flicker flickerContainerText" style="transition-duration: 0s;">S</p>
            <p class="flicker flickerContainerText" style="transition-duration: 0s;">t</p>
            <p class="flicker flickerContainerText" style="transition-duration: 0s;">u</p>
            <p class="flicker flickerContainerText" style="transition-duration: 0s;">d</p>
            <p class="flicker flickerContainerText" style="transition-duration: 0s;">i</p>
            <p class="flicker flickerContainerText" style="transition-duration: 0s;">o</p>
            <p class="flicker flickerContainerText" style="transition-duration: 0s;">s</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "FlickerEffect",
    data() {
        return {
            fade: 0,
            flickerDuration: 50, // Reduced flicker duration for faster display
            temp: 0,
            myInterval: null,
        };
    },
    mounted() {
        this.showP();
    },
    watch: {
        fade() {
            this.updateFlickerEffect();
        },
        flickerDuration() {
            this.updateFlickerEffect();
        }
    },
    methods: {
        showP() {
            const flickerContainer = this.$refs.flickerContainer;
            flickerContainer.style.display = 'flex'; // Display the flickerContainer
            flickerContainer.style.color = 'black'; // Start with opacity 0
            setTimeout(() => {
                flickerContainer.style.opacity = 1; // Fade in to opacity 1
                this.startFlickerEffect(); // Start flicker effect after fade-in
            }, 800); // 0.5 seconds delay for fade-in
        },
        startFlickerEffect() {
            this.myInterval = setInterval(() => {
                const p = document.getElementsByClassName("flicker");
                const randomNumber = Math.floor(Math.random() * p.length);

                for (let i = 0; i < p.length; i++) {
                    p[i].style.transitionDuration = this.fade + "s";
                }

                this.temp += 1;

                if (!p[randomNumber].classList.contains("on") && this.temp < this.flickerDuration) {
                    p[randomNumber].classList.add("on");
                } else {
                    if (this.temp < this.flickerDuration) {
                        p[randomNumber].classList.remove("on");
                        p[randomNumber].classList.remove("white");
                    } else {
                        p[randomNumber].classList.add("white");
                        p[randomNumber].classList.remove("on");
                    }
                }
                if (this.temp == this.flickerDuration + 50) { // Reduced delay for faster display
                    clearInterval(this.myInterval);
                    this.applyFinalStyles(); // Apply final styles
                    setTimeout(() => {
                        this.$emit('flicker-complete'); // Emit event when flicker is complete
                    }, 500); // Adjust the timeout as needed for the fade effect
                }
            }, 20);
        },
        updateFlickerEffect() {
            clearInterval(this.myInterval);
            this.temp = 0;
            this.startFlickerEffect();
        },
        applyFinalStyles() {
            const flickerContainer = this.$refs.flickerContainer;
            flickerContainer.classList.add('headline');
            const pElements = flickerContainer.getElementsByTagName('p');
            for (let p of pElements) {
                p.classList.add('header');
                p.classList.add('white-text');
            }
        },
        reloadPage() {
            window.location.reload(true);
        },
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');

.flickerContainer {
    /* top: 50%; */
    /* left: 50%; */
    /* transform: translate(-50%, -50%); */
    width: 35vw;
    /* padding: 20px; */
    flex-wrap: wrap;
    justify-content: space-evenly;
    /* height: 50%; */
    transition: opacity 0.5s ease-in-out;
    display: none;
    position: relative;
    margin-top: 20px;
}

.flickerContainerText {
    /*font-family: 'Gugi', sans-serif;*/
    font-family: 'Agrandir', sans-serif;
    font-size: 53px;
    font-weight: 700;
    text-align: center;
    transition: all 0.2s ease-in-out;
    word-wrap: break-word;
    margin: 0;
}

.on {
    -webkit-text-stroke: 1px rgb(255, 255, 255);
    text-shadow: 0px 0px 8px rgb(255, 255, 255), 0px 0px 20px rgba(255, 255, 255, 0.5);
}

.white {
    color: white;
}

#reload-button {
    background: black;
    color: rgb(192, 192, 192);
    border: 1px solid rgb(26, 26, 26);
    padding: 20px;
    transition: all 0.2s ease-in-out;
}

#reload-button:hover {
    background: rgb(11, 11, 11);
    border-color: black;
}

.slider {
    margin: 20px 0px 0px 20px;
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
}

.slider p {
    color: white;
    margin-bottom: 10px;
}

.slider input[type=range] {
    appearance: none;
    -webkit-appearance: none;
    background-color: rgb(35, 35, 35);
    height: 10px;
}

.slider input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background-color: #ffd000;
    width: 10px;
    height: 26px;
}

/* Mobile Styles */
@media (max-width: 768px) {

    .flickerContainer{
        width: 100%;
    }
    .flickerContainerText {
        font-size: 10vw;
    }
}

@media (max-width: 450px) {

}

/*.white-text {*/
/*    color: white;*/
/*    font-size: 65px;*/
/*    font-weight: 700;*/
/*    line-height: 80px;*/
/*    word-wrap: break-word;*/
/*}*/
</style>