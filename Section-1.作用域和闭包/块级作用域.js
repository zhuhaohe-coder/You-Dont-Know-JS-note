var foo = true;
if (foo) {
  var bar = foo * 2;
  console.log(bar); //2
}
console.log(bar); //2

if (foo) {
  let baz = foo * 2;
  console.log(baz); //2
}
// console.log(baz); //ReferenceError
