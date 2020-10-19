import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import router from '../router';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
  },
  mutations: {
    SET_CURRENTUSER(state, user) {
      state.currentUser = user;
    },
  },
  actions: {
    async fetchCurrentUser({ commit, dispatch }) {
      const res = await axios.get('/api/auth/currentuser');
      commit('SET_CURRENTUSER', res.data.currentUser);
    },

    async register({ commit, dispatch }, user) {
      try {
        const res = await axios.post('/api/auth/signup', user);
        commit('SET_CURRENTUSER', res.data);
        router.push('/dashboard');
        return { errors: null };
      } catch (err) {
        if (err.response) {
          const errors = err.response.data.errors.map((e) => {
            return e.msg;
          });

          return { errors };
        }
      }
    },

    async signin({ commit, dispatch }, user) {
      try {
        const res = await axios.post('/api/auth/signin', user);
        commit('SET_CURRENTUSER', res.data);
        router.push('/dashboard');
        return { errors: null };
      } catch (err) {
        if (err.response) {
          const errors = err.response.data.errors.map((e) => {
            return e.msg;
          });

          return { errors };
        }
      }
    },

    async logout({ commit }) {
      await axios.post('/api/auth/signout');
      commit('SET_CURRENTUSER', null);
      if (router.currentRoute.path !== '/') {
        router.push('/');
      }
    },
  },
  modules: {},
});
