import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login.vue';  // Ajuste para o caminho correto
import App from '../App.vue';
import DataTransations from '../pages/DataTransations.vue';
import Dashboard from '../pages/Dashboard.vue';

const routes = [
  { path: '/', component: App },  
  { path: '/login', component: Login },
  { path: '/home', component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
