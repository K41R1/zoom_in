import VueRouter from 'vue-router'
import HeatMap from './components/dashboard/HeatMap'
import Reclamation from './components/dashboard/Reclamation';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HeatMap
  },
  {
    path: '/reclamation',
    name:'reclamation',
    component: Reclamation
  }
];


let router = new VueRouter({
  routes
});

export default router;
