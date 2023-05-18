function Foo(name) {
  this.name = name;
}

Foo.prototype.myName = function () {
  return this.name;
};

function Bar(name, label) {
  Foo.call(this, name);
  this.label = label;
}

// Bar.prototype = Foo.prototype;

Bar.prototype = Object.create(Foo.prototype);
// // 注意！现在没有 Bar.prototype.constructor 了
Bar.prototype.myLabel = function () {
  return this.label;
};

const a = new Bar("a", "obj a"); //改变this指向--->新创建的a

console.log(a.myName()); //a
console.log(a.myLabel()); //obj a
