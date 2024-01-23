import { createRouter, createWebHistory } from 'vue-router';

// Import components that you want to route
import LandingPage from "@/views/LandingPage.vue";
import AboutUsPage from "@/views/AboutUsPage.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: LandingPage,
    },
    {
        path: '/about-us',
        name: 'AboutUs',
        component:AboutUsPage,
    },
    // add more routes here
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
