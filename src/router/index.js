import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue'; 
import MalePage from '../views/MalePage.vue';
import FemalePage from '../views/FemalePage.vue'; 

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/Homme', name: 'Male', component: MalePage },
  { path: '/Femme', name: 'Female', component: FemalePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
