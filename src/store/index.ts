import Vue from 'vue';
import Vuex from 'vuex';

import app from '../store/modules/app';
import sidebar from '../store/modules/sidebar';
import getters from '../store/getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    app,
    sidebar
  },
  getters,
});
