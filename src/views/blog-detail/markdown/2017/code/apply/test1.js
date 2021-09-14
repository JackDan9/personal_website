// 通用的防抖函数
var debounce = function(fn, delay) {
  var ctx;
  var args;
  var timer = null;

  var later = function() {
    fn.apply(ctx, args);
    timer = null;
  }

  return function() {
    ctx = this;
    args = arguments;

    if(!timer) {
      clearTimeout(delay);
      timer = null;
    }

    timer = setTimeout(later, delay);
  }
}