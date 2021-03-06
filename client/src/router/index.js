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
    path: '/chart/portfolio/:id',
    name: 'PortfolioValue',
    component: () => import('../views/PortfolioValue.vue'),
  },
  {
    path: '/portfolio/add',
    name: 'AddPortfolio',
    component: () => import('../views/AddPortfolio.vue'),
  },
  {
    path: '/manage',
    name: 'Manage',
    component: () => import('../views/ManagePortfolios.vue'),
  },
  {
    path: '/chart/crypto',
    name: 'CryptoChart',
    component: () => import('../views/CryptoChart.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
