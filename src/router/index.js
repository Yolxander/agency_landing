import { createRouter, createWebHistory } from 'vue-router';

// Import components that you want to route
import HomePage from "@/views/HomePage.vue";
import OurServicesPage from "@/views/OurServicesPage.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/services',
        name: 'Services',
        component:OurServicesPage,
    },
    // add more routes here
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
