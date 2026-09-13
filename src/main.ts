import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import '@mdi/font/css/materialdesignicons.min.css';
import './lm-ui/styles/lm.scss';
import LmUI from './lm-ui';
import App from './App.vue';
import { routes } from './router';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).use(LmUI).mount('#app');
