import { createApp } from 'vue'
import App from './App.vue'
import WebFont from 'webfontloader';
import router from './router';
import { createHead } from '@vueuse/head'
// Define the feature flag
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
import VueScrollTo from 'vue-scrollto';

WebFont.load({
    google: {
        families: [
            'Gugi',
            'Notable',
            'Audiowide'
        ]
    }
});

const app = createApp(App);
const head = createHead()

//changes browser tap name to custom desired title
document.title = 'SEMEPRE studios';

app.use(router).use(head);
app.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
});


app.mount('#app');
