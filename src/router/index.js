import { createRouter, createWebHistory } from 'vue-router';

// Import components that you want to route
import Home from "../views/HomePage.vue";
import OurServicesPage from "../views/OurServicesPage.vue";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/services",
        component: OurServicesPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 };
    },
});

export default router;
