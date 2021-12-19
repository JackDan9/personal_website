// 给出两个很大的整数，要求实现程序求出两个整数之和。注：这两个整数用Long都无法表示
var sum = function(strNum1, strNum2) {
  var strNum1Arr = strNum1.split('');
  var strNum2Arr = strNum2.split('');
  
  var len = 0;
  if(strNum1Arr.length >= strNum2Arr.length) {
    len = strNum2Arr.length;
  } else {
    len = strNum1Arr.length;
  }

  var result = '';
  for(let i = len - 1; i >= 0; i--) {
    // 大于等于10，往前进一位
    // 小于10，则放到结果里面
    tempSum = charToNumber(strNum1Arr[i]) + charToNumber(strNum2Arr[i]);
    
  }
}

var charToNumber =  function(char) {
  return char.charCodeAt() - '0'.charCodeAt();
}


