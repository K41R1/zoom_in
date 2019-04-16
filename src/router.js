import VueRouter from 'vue-router'
import HeatMap from './components/dashboard/HeatMap'

const routes = [
  {
    path: '/map',
    name: 'map',
    component: HeatMap
  }
];


let router = new VueRouter({
  routes
});

export default router;
