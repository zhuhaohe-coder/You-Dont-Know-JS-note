// 隐式 VS 显式
// function foo() {
//   console.log(this.a);
// }
// var obj1 = {
//   a: 2,
//   foo: foo,
// };
// var obj2 = {
//   a: 3,
//   foo: foo,
// };
// obj1.foo(); // 2
// obj2.foo(); // 3
// obj1.foo.call(obj2); // 3
// obj2.foo.call(obj1); // 2

// new VS 隐式
// function foo(something) {
//   this.a = something;
// }
// var obj1 = {
//   foo: foo,
// };
// var obj2 = {};
// obj1.foo(2);
// console.log(obj1.a); // 2
// obj1.foo.call(obj2, 3);
// console.log(obj2.a); // 3
// var bar = new obj1.foo(4);
// console.log(obj1.a); // 2
// console.log(bar.a); // 4

// 硬绑定(显式) VS new
function foo(something) {
  this.a = something;
}
var obj1 = {};

const bar = foo.bind(obj1);
bar(2);
console.log(obj1.a); //2

const baz = new bar(3);
console.log(obj1.a); //2
console.log(baz.a); //3
