// function foo() {
//   console.log(this.a);
// }
// var a = 2;
// foo.call(null);

// function foo(a, b) {
//   console.log("a:" + a + ", b:" + b);
// }
// // 我们的 DMZ 空对象
// var ø = Object.create(null);
// // 把数组展开成参数
// foo.apply(ø, [2, 3]); // a:2, b:3
// // 使用 bind(..) 进行柯里化
// var bar = foo.bind(ø, 2);
// bar(3); // a:2, b:3

// function foo() {
//   console.log(this.a);
// }

// var a = 2;
// var o = { a: 3, foo: foo };
// var p = { a: 4 };
// o.foo(); // 3
// (p.foo = o.foo)(); // 2

if (!Function.prototype.softBind) {
  Function.prototype.softBind = function (obj) {
    var fn = this;
    // 捕获所有 curried 参数
    var curried = [].slice.call(arguments, 1);
    var bound = function () {
      return fn.apply(
        !this || this === (global || window) ? obj : this,
        curried.concat.apply(curried, arguments)
      );
    };
    bound.prototype = Object.create(fn.prototype);
    return bound;
  };
}

function foo() {
  console.log("name: " + this.name);
}
var obj = { name: "obj" },
  obj2 = { name: "obj2" },
  obj3 = { name: "obj3" };
var fooOBJ = foo.softBind(obj);
fooOBJ(); //name: obj

obj2.foo = foo.softBind(obj);
obj2.foo(); // name: obj2 <---- 看！！！
fooOBJ.call(obj3); // name: obj3 <---- 看！
