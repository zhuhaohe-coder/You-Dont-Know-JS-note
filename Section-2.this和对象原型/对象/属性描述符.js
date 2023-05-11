var myObject = {
  a: 2,
};

Object.defineProperty(myObject, "a", {
  value: 4,
  writable: true,
  configurable: false, // 不可配置！
  enumerable: true,
});

console.log(myObject.a);
myObject.a = 5;
console.log(myObject.a);

// Object.defineProperty(myObject, "a", {
//   value: 6,
//   writable: true,
//   configurable: true,
//   enumerable: true,
// });// TypeError
