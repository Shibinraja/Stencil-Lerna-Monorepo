import { createApp } from 'vue'
import { ComponentLibrary } from '@workspace/vue';

import App from './App.vue'

createApp(App).use(ComponentLibrary).mount('#app');