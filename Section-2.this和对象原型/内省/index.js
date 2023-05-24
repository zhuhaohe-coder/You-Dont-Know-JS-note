/*
function Foo() {
  // ...
}
Foo.prototype.something = function () {
  // ...
  console.log("...");
};
var a1 = new Foo();
// 之后
if (a1 instanceof Foo) {
  a1.something();
}
*/

function Foo() {}
function Bar() {}

Bar.prototype = Object.create(Foo.prototype);

const b1 = new Bar();
console.log(Bar.prototype instanceof Foo); //true
console.log(Object.getPrototypeOf(Bar.prototype) === Foo.prototype); //true
console.log(Foo.prototype.isPrototypeOf(Bar.prototype)); //true

console.log(b1 instanceof Bar); //true
console.log(b1 instanceof Foo); //true
