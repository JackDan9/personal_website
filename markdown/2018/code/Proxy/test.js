var obj = {
    a: 1
  };
  
  var copy_obj = obj; // shallow copy 浅拷贝obj对象到copy_obj
  copy_obj.a = 2;
  copy_obj.b = 3;
  
  console.log(copy_obj);
  console.log(obj);