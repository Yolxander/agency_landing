import { createRouter, createWebHistory } from 'vue-router';

// Import components that you want to route
import OurServicesPage from "../views/OurServicesPage.vue";
import AboutUsPage from "@/views/AboutUsPage.vue";
import FaqPage from "@/views/FaqPage.vue";
import WelcomePage from "@/views/WelcomePage.vue";

const routes = [
    {
        path: "/",
        component: WelcomePage,
    },
    {
        path: "/services",
        component: OurServicesPage,
    },
    {
        path: "/about-us",
        component: AboutUsPage,
    },
    {
        path: "/faq",
        component: FaqPage,
    },
    {
        path: "/our-services",
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
