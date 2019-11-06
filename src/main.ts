import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueStorage from 'vue-ls';
import config from '@/config/defaultSettings';
import '@/styles/index.scss';

Vue.use(VueStorage, config.storageOptions);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
