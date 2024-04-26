<template>
    <div>
        <h1 ref="title" data-splitting>We're <span class="logoStyle">SEMPREstudios</span></h1>
        <p ref="paragraph" data-splitting="words">
            SEMPREstudios is your go-to crew for making your small business shine online. We started this journey with a simple idea: help small businesses, like yours, thrive in the digital world without the stress of big budgets. Whether you're tuning up cars in your garage or replacing roofs, we tailor our digital magic to fit your unique needs. We're all about creating connections, keeping things running smoothly, and making sure your business stands out from the crowd. Ready to start our collaboration?
        </p>
    </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import Splitting from 'splitting';

export default {
    name: 'MainDescription',
    setup() {
        const title = ref(null);
        const paragraph = ref(null);

        const random = (min, max) => Math.random() * (max - min) + min;

        const animateElements = (elements, duration, delay, stagger) => {
            elements.forEach((element, index) => {
                element.animate([
                    {
                        transform: `translate(${random(-100, 100)}px, ${random(-100, 100)}px) rotate(${random(-90, 90)}deg)`,
                        filter: 'blur(20px)',
                        opacity: 0
                    },
                    {
                        transform: 'none',
                        filter: 'blur(0)',
                        opacity: 1
                    }
                ], {
                    duration: duration,
                    delay: delay + index * stagger,
                    easing: 'ease-out',
                    fill: 'both'
                });
            });
        };

        onMounted(() => {
            // Initialize Splitting without assigning the result to a variable
            Splitting();

            // Animate title characters
            const titleChars = title.value.querySelectorAll('.char');
            animateElements(titleChars, 1000, 0, 100);

            // Animate paragraph words
            const paragraphWords = paragraph.value.querySelectorAll('.word');
            animateElements(paragraphWords, 1000, 900, 150); // Start after title animation
        });

        return { title, paragraph };
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'EB Garamond', serif;
}

div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
    background: #000;
    padding: 24px;
}

h1 {
    color: #fff;
    font-size: 3em;
    font-weight: 600;
}

p {
    max-width: 600px;
    color: #fff;
    font-size: 1.25em;
}

.logoStyle{
    font-family: 'Gugi', sans-serif;
}
</style>
