import Vue from 'vue';
import VueStorage from 'vue-ls';
import showdown from 'showdown';
// import showdownHeightlight from 'showdown-highlight';
const showdownHeightlight = require('showdown-highlight');
import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/monokai-sublime.css';

import App from './App';
import router from './router';
import store from './store';
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

Vue.prototype.md2html = (md) => {
  let converter = new showdown.Converter({
    extensions: [showdownHeightlight]
  });
  let text = md.toString();
  let html = converter.makeHtml(text);
  return html;
}

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App)
}).$mount('#app');
