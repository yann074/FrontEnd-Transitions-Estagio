import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login.vue';  // Ajuste para o caminho correto
import App from '../App.vue';
import DataTransations from '../pages/DataTransactions.vue';
import Dashboard from '../pages/Dashboard.vue';
import {useAuth} from "../store/auth"
import HelloWorld from '../components/HelloWorld.vue';
import FormRegister from '../pages/FormRegister.vue';
import AllCategory from '../components/Layouts/category/AllCategory.vue';


const routes = [
  { 
    path: "/", 
    component: HelloWorld },
  { 
    path: "/login", 
    component: Login 
  },
  { 
    path: "/dashboard", 
    component: Dashboard,
    meta: { requiresAuth: true } 
  },
  {
    path: "/formregister",
    component: FormRegister,
    meta: { requiresAuth: true } 
  },
  {
    path:"/category",
    component: AllCategory
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const auth = useAuth(); 
  const token = localStorage.getItem("token");

  if (to.meta.requiresAuth && !token) {
    next("/login"); 
  } else {
    next();
  }
});

export default router;