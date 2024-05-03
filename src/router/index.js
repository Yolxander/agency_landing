import { createRouter, createWebHistory } from 'vue-router';

// Import components that you want to route
import Home from "../views/HomePage.vue";
import OurServicesPage from "../views/OurServicesPage.vue";
import AutoDownloadPdf from "@/views/AutoDownloadPdf.vue";
import AboutUsPage from "@/views/AboutUsPage.vue";
import FaqPage from "@/views/FaqPage.vue";

const routes = [
    {
        path: "/",
        component: Home,
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
        path: "/fqa",
        component: FaqPage,
    },
    {
        path: "/pdf",
        component: AutoDownloadPdf,
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
