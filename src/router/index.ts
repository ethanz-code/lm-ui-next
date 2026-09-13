import type { RouteRecordRaw } from 'vue-router';
import Overview from '../views/Overview.vue';
import Lists from '../views/Lists.vue';
import Form from '../views/Form.vue';
import Feedback from '../views/Feedback.vue';

export const routes: RouteRecordRaw[] = [
  { path: '/', name: 'overview', component: Overview },
  { path: '/lists', name: 'lists', component: Lists },
  { path: '/form', name: 'form', component: Form },
  { path: '/feedback', name: 'feedback', component: Feedback },
];
