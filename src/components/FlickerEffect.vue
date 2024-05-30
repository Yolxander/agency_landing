<template>
    <div>
        <div class="flickerContainer" ref="flickerContainer">
            <!-- text generated with JS -->
        </div>
    </div>
</template>

<script>

export default {
    name: "FlickerEffect",
    data() {
        return {
            text: "SEMPRE Studios",
            fade: 0,
            flickerDuration: 50, // Reduced flicker duration for faster display
            temp: 0,
            myInterval: null,
        };
    },
    mounted() {
        this.createP(this.text);
        this.startFlickerEffect();
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
        createP(text) {
            const flickerContainer = this.$refs.flickerContainer;
            for (let i = 0; i < text.length; i++) {
                const p = document.createElement("p");
                p.classList.add("flicker");
                flickerContainer.appendChild(p);
                p.innerHTML = text[i];
            }
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
                if (this.temp == this.flickerDuration + 100) { // Reduced delay for faster display
                    clearInterval(this.myInterval);
                    this.$refs.flickerContainer.style.opacity = 0; // Fade out the container
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
        reloadPage() {
            window.location.reload(true);
        },
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');

.flickerContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;
    height: 50%;
    transition: opacity 0.5s ease-in-out; /* Add transition for opacity */
}

.flickerContainer p {
    text-transform: uppercase;
    font-family: 'Gugi', sans-serif;
    font-size: 60px;
    font-weight: 700;
    line-height: 80px;
    text-align: center;
    margin: 0px 20px;
    transition: all 0.2s ease-in-out;
    word-wrap: break-word;
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
    #app{
        background: darkgoldenrod;
    }
    .flickerContainer {
        margin-top: 0;
        height: auto;
        position: absolute;
        top: 40%;
        left: 22%;
        transform: translate(-50%, -50%);
        width: 24%;
        padding: 0px;
    }

    .flickerContainer p {
        font-size: 30px;
        line-height: 60px;
        margin: 0px 5px;
        text-align: center;
    }

    #reload-button {
        padding: 10px;
    }

    .slider {
        margin: 10px 0px 0px 10px;
        gap: 15px;
    }

    .slider input[type=range] {
        height: 5px;
    }

    .slider input[type="range"]::-webkit-slider-thumb {
        width: 5px;
        height: 13px;
    }
}

@media (max-width: 450px) {
    .flickerContainer {
        width: 25%;
        left: 25%;
    }
}
</style>
