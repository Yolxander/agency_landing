<template>
    <section class="faq faq--default">
        <h2 class="faq-title">Frequently Asked Questions</h2>
        <div class="faq-list">
            <div v-for="(item, index) in faqItems" :key="index">
                <button class="faq-tab" @click="toggle(index)">
                    {{ item.question }}
                </button>
                <div v-if="isActive(index)" class="faq-tabpanel">
                    <p>{{ item.answer }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'FaqSection',
    data() {
        return {
            activeIndex: null,
            faqItems: [
                {
                    question: 'How do I track my order?',
                    answer: 'Once your order has been shipped, you will receive a shipment confirmation email with a tracking number...',
                },
                // Add other FAQ items here
            ],
        };
    },
    methods: {
        toggle(index) {
            this.activeIndex = this.activeIndex === index ? null : index;
        },
        isActive(index) {
            return this.activeIndex === index;
        },
    },
};
</script>

<style scoped>
body {
    font-family: system-ui, sans-serif;
    padding: 2rem 1.5rem;
    line-height: 1.5;
    @media (prefers-color-scheme: dark) {
        background-color: #161628;
        color: white;
    }
}

.faq {
    max-width: 50rem;
    padding: 1rem 0;
    margin-left: auto;
    margin-right: auto;
}
.faq-title {
    margin-top: 0;
    margin-bottom: 1em;
    font-size: 1.5rem;
    @media (min-width: 768px) {
        font-size: 1.75rem;
    }
}

.faq-tab {
    all: unset;
    font-weight: 600;
    margin-left: -0.75em;
    margin-right: -0.75em;
    margin-bottom: 0.25rem;
    padding: 0.5em 0.75em;
    display: flex;
    align-items: start;
    width: 100%;
    font-size: 1rem;
    @media (min-width: 768px) {
        font-size: 1.25rem;
    }

    /* If the tab contains the aria-expanded attribute, it means the component has been initialized */
    &:where([aria-expanded]) {
        margin-bottom: 1rem;
        cursor: pointer;
        user-select: none;
        outline: none;
        border-radius: 0.25rem;
        border: 1.5px solid color-mix(in srgb, currentColor 20%, transparent);
        @media (prefers-reduced-motion: no-preference) {
            transition: 150ms color;
        }
        &:hover {
            color: #f76600;
            @media (prefers-color-scheme: dark) {
                color: #ffb600;
            }
        }
        &:focus-visible {
            outline: 2px solid;
        }
        &::after {
            content: "+";
            margin-left: auto;
        }
        &.ui-active::after {
            content: "-";
        }
    }
    &:where(:not([aria-expanded]))::before {
        content: "-";
        padding-right: 0.5em;
    }
}

.faq-tabpanel {
    /* Сollapse animation for opening and closing */
    /* Use transition only if the user has not enabled the setting on their device for reduced motion */
    @media (prefers-reduced-motion: no-preference) {
        &:is(.ui-enter-active, .ui-leave-active) {
            transition: 0.15s ease-in-out;
            overflow: hidden;
        }
        &:is(.ui-enter-to, .ui-leave-from) {
            height: var(--ui-transition-height);
        }
        &:is(.ui-enter-from, .ui-leave-to) {
            opacity: 0;
            height: 0;
        }
    }
    &::after {
        content: "";
        height: 1.5rem;
        display: block;
    }
    & * {
        margin-top: 0.75em;
        margin-bottom: 0.75em;
    }
    & *:where(:first-child) {
        margin-top: 0;
    }
    & *:where(:last-child) {
        margin-bottom: 0;
    }
}

:is(.faq--mobile, .faq--headings) .faq-tabpanel:where(:not(.ui-shown)) {
    display: none;
    @media (scripting: none) {
        & {
            display: initial;
        }
    }
}

@media (min-width: 640px) {
    .faq--mobile .faq-tabpanel {
        display: block;
    }
}

.tutorial {
    text-align: center;
    margin: 1.5rem auto;
    border: 1px solid;
    padding: 0.5rem 1.5rem;
    width: fit-content;
    & a {
        color: currentColor;
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 2px;
        text-decoration-color: color-mix(in srgb, currentColor 50%, transparent);
        &:hover {
            text-decoration-color: currentColor;
        }
    }
}

</style>