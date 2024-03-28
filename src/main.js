import { createApp } from 'vue'
import App from './App.vue'
import WebFont from 'webfontloader';
import router from './router';
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

app.use(router);
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
