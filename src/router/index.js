import { createRouter, createWebHistory } from 'vue-router';

// Import components that you want to route
import OurServicesPage from "../views/OurServicesPage.vue";
import AutoDownloadPdf from "@/views/AutoDownloadPdf.vue";
import AboutUsPage from "@/views/AboutUsPage.vue";
import FaqPage from "@/views/FaqPage.vue";
import WelcomePage from "@/views/WelcomePage.vue";

const routes = [
    {
        path: "/home",
        component: WelcomePage,
    },
    {
        path: "/services",
        component: OurServicesPage,
    },
    {
        path: "/",
        component: AboutUsPage,
    },
    {
        path: "/faq",
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
