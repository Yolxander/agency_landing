<template>
    <div class="logo">
        <p>A</p>
        <span class="letter">g</span>
        <span class="letter">e</span>
        <span class="letter">n</span>
        <span class="letter">c</span>
        <p id="y-letter">Y</p>
    </div>
</template>

<script>
export default {
    name: "LogoComponent",
    mounted() {
        setTimeout(() => {
            this.showLettersSequentially();
        }, 1000);

    },
    methods: {
        showLettersSequentially() {
            const letters = document.querySelectorAll('.logo .letter');
            const y_letter = document.getElementById('y-letter');
            let delay = 0;
            // eslint-disable-next-line no-unused-vars
            letters.forEach((letter, index) => {
                setTimeout(() => { letter.style.display = 'block'; }, delay);
                delay += 200; // Delay for each letter (500ms)
            });

            setTimeout(() => {
                letters.forEach((letter, index) => {
                    setTimeout(() => { letter.style.display = 'none'}, index * 500);
                });
            }, 4000); // Hide letters after 3 seconds

            setTimeout(() => {
                y_letter.style.transform = 'none'
            }, 6000); //Move
        }
    }
}
</script>

<style scoped>

.logo{
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.logo p{
    color: #FFF;
    font-family: 'Gugi', sans-serif;
    font-size: 80px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 10.48px;
    margin: 0;
}

.logo span{
    font-size: 25px;
}

.letter {
    display: none;
    transition: opacity 0.5s ease;
    color: #FFFFFF;
    animation: fadeInTop 5s ease-in-out;
}

.logo:hover .letter {
    display:block;
}

#y-letter {
    transform: translateY(20px) rotate(4deg); /* Translates Y lower and rotates it */
    animation: fadeInTop 5s ease-in-out;
}

</style>