import { createApp } from 'vue'
import App from './App.vue'
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Gugi']
    }
});

createApp(App).mount('#app')
