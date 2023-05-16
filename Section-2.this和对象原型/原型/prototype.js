// var anotherObject = {
//   a: 2,
// };
// // 创建一个关联到 anotherObject 的对象
// var myObject = Object.create(anotherObject);
// console.log(myObject.a); //2

// const anotherObject = {
//   a: 2,
// };
// // 创建一个关联到 anotherObject 的对象
// const myObject = Object.create(anotherObject);
// for (let k in myObject) {
//   console.log("found: " + k);
// }
// // found: a
// "a" in myObject; // true

const anotherObject = {
  a: 2,
};
const myObject = Object.create(anotherObject);
console.log(anotherObject.a); //2
console.log(myObject.a); //2

console.log(anotherObject.hasOwnProperty("a")); //true
console.log(myObject.hasOwnProperty("a")); //false

myObject.a++; //隐式屏蔽！

console.log(anotherObject.a); //2
console.log(myObject.a); //3
