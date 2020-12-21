import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import VueStorage from 'vue-ls';
import config from './config/defaultSettings';
import '@/styles/index.scss';
import '@/assets/index.css';
import i18n from './i18n';
import '@/assets/tailwind.css';
import './assets/img/sun_bg.jpg';

import mavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';
Vue.use(mavonEditor);

Vue.use(VueStorage, config.storageOptions);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app');
