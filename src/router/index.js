import { createRouter, createWebHistory } from 'vue-router';

// Import components that you want to route
import Home from "../views/HomePage.vue";
import OurServicesPage from "../views/OurServicesPage.vue";
import { useHead } from "@vueuse/head";

const routes = [
    {
        path: "/",
        component: {
            ...Home,
            setup() {
                useHead({
                    title: "SEMPREstudios",
                    meta: [
                        {
                            name: `description`,
                            content: "SEMPREstudios is a full-service digital agency. We can make all your digital dreams come true."
                        },
                    ],
                });
            },
        },
    },
    {
        path: "/services",
        component: {
            ...OurServicesPage,
            setup() {
                useHead({
                    title: "SEMPREstudios",
                    meta: [
                        {
                            name: `description`,
                            content: "SEMPREstudios is a full-service digital agency. We can make all your digital dreams come true."
                        },
                    ],
                });
            },
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 };
    },
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'Default Title';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', to.meta.description || 'Default Description');
    }
    next();
});


export default router;
