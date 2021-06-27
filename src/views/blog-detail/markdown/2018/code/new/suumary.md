# new

## 示例

```javascript
function A() {
  this.do = function() {
    return 'foo';
  };
}

A.prototype = function() {
  this.do = function() {
    return 'bar';
  }
}

var x = new A().do();
console.log(x);

// 换种写法
function A() {
  this.do = function() {
    return 'foo';
  };
}

A.prototype = function() {
  this.do = function() {
    return 'bar';
  }
}

var x = new A();
console.log(x.do());
```