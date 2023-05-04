function foo(num) {
  console.log("foo: " + num);
  // 记录 foo 被调用的次数
  this.count++;
}

foo.count = 0;

for (let i = 0; i < 10; i++) {
  if (i > 5) {
    foo(i);
  }
}
// foo 被调用了多少次？
console.log(foo.count); //0

function baz() {
  var a = 2;
  this.bar();
}
function bar() {
  console.log(this.a);
}
baz(); //TypeError: this.bar is not a function
