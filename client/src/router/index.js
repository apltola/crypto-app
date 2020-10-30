import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/auth/signin',
    name: 'Signin',
    component: () => import('../views/Signin.vue'),
    props: {
      authType: 'signin',
    },
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    props: {
      authType: 'register',
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
  },
  {
    path: '/portfolio/:portfolioId/transaction',
    name: 'AddTransaction',
    component: () => import('../views/AddTransaction.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
