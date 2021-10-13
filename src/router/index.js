import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/component-structure',
    name: 'Component Structure',
    component: () => import(/* webpackChunkName: "structure" */ '../views/01_ComponentStructure.vue'),
  },
  {
    path: '/data-binding',
    name: 'Data Binding',
    component: () => import('../views/02_DataBinding.vue'),
  },
  {
    path: '/conditionals',
    name: 'Conditiontals',
    component: () => import('../views/03_Conditionals.vue'),
  },
  {
    path: '/props',
    name: 'Props',
    component: () => import('../views/04_Props.vue'),
  },
  {
    path: '/lists',
    name: 'Lists',
    component: () => import('../views/05_Lists.vue'),
  },
  {
    path: '/methods',
    name: 'Methods',
    component: () => import('../views/06_Methods.vue'),
  },
  {
    path: '/lifecycles',
    name: 'Lifecycles',
    component: () => import('../views/07_Lifecycles.vue'),
  },
  {
    path: '/component-communication',
    name: 'Component Communication',
    component: () => import('../views/08_ComponentCommunication'),
  },
  {
    path: '/hooks',
    name: 'Hooks',
    component: () => import('../views/09_Hooks'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
export { routes };
