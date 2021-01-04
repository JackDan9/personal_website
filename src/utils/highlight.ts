import Vue from 'vue';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';

interface Highlightjs {
  [x:string]: any
}

const Highlight:any = {};

Highlight.install = function (Vue:any, options:any) {
  Vue.directive('hljs', el => {
    let blocks = el.querySelectorAll('pre code');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  })
}

export default Highlight;