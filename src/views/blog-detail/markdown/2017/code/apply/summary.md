医院渡云的面试
1. 笔试题
console.log(typeof a)
console.log(typeof b)
console.log(typeof c)
var a = function() {return true;} 
window.b = function() {return true;}
function c() {return true;}
console.log(a() && b() && c())

o = {
  a: 1,
  f: function() {
    return this.a
  }
}

console.log(o.f());

var o1 = o;
console.log(o1.f());

var o2 = o;
console.log(o2.f.call(this))
2. 笔试题 string转化为array (split方法)
3. MVC和MVVM的区别 --- https://www.cnblogs.com/ranyonsue/p/12090647.html
4. Webpack热更新原理
