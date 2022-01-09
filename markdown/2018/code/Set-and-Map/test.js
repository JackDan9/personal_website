const _r = new FinalizationRegistry(v => {
  // ...
});

let _obj = {};
_r.register(_obj, "注册表清除器提醒");
_r.unregister(_obj);