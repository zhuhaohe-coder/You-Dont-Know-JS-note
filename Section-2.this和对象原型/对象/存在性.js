console.log(4 in [2, 4, 6]); //false
var myObject = {};
Object.defineProperty(
  myObject,
  "a",
  // 让 a 像普通属性一样可以枚举
  { enumerable: true, value: 2 }
);
Object.defineProperty(
  myObject,
  "b",
  // 让 b 不可枚举
  { enumerable: false, value: 3 }
);
myObject.b; // 3
"b" in myObject; // true
myObject.hasOwnProperty("b"); // true
// .......
for (var k in myObject) {
  console.log(k, myObject[k]);
}
// a 2
