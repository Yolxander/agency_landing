import { createApp } from 'vue'
import App from './App.vue'
import WebFont from 'webfontloader';
import router from './router';
// Define the feature flag
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;

WebFont.load({
    google: {
        families: [
            'Gugi',
            'Notable',
            'Audiowide'
        ]
    }
});

createApp(App).use(router).mount('#app')
