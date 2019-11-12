import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueStorage from 'vue-ls';
import config from '@/config/defaultSettings';
import '@/styles/index.scss';
import i18n from './i18n'

Vue.use(VueStorage, config.storageOptions);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app');
