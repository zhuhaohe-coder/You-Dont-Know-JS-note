function Foo() {
  // ...
}
Foo.prototype.constructor === Foo; // true
const a = new Foo();
console.log(a.constructor === Foo); // true

function NothingSpecial() {
  console.log("Don't mind me!");
}
const b = new NothingSpecial(); // "Don't mind me!"
console.log(b); // {}
