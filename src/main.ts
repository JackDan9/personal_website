import Vue from 'vue';
// import VueStorage from 'vue-ls';
// import VueResource from 'vue-resource';
// https://github.com/showdownjs/showdown
import showdown from 'showdown';
const showdownHeightlight = require('showdown-highlight');

import { Loading } from 'element-ui';
import ElementUI from 'element-ui';
Vue.use(ElementUI, {
  size: 'medium' // set element-ui default size
})

import App from './App';
import router from './router';
import store from './store';
// import config from './config/defaultSettings';
import './tailwind.css';
import '@/assets/index.css';
import i18n from './i18n';

// import mavonEditor from 'mavon-editor';
// import 'mavon-editor/dist/css/index.css';
// Vue.use(mavonEditor);

// Vue.use(VueStorage, config.storageOptions);

Vue.config.productionTip = false;

Vue.prototype.md2html = (md) => {
  let converter = new showdown.Converter({
    extensions: [showdownHeightlight],
    tables: true,
    splitAdjacentBlockquotes: true
  });
  let text = md.toString();
  let html = converter.makeHtml(text);
  return html;
};

// import PageLoading from './components/PageLoading/index';
// Vue.use(PageLoading);
// Vue.use(VueResource);
// Vue.http.interceptors.push((request, next) => {
//   store.dispatch('showLoading');
//   next((response) => {
//     setTimeout(() => {
//       store.dispatch('hideLoading');
//     }, 100);
//     return response;
//   });
// })
// TS
// (Vue as any).http.interceptors.push((request, next) => {
//   console.log(this)
//   store.dispatch('showLoading');
//   next((response) => {
//     setTimeout(function () {
//       store.dispatch('hideLoading');
//     }, 100);
//     return response;
//   })
// });

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app');
