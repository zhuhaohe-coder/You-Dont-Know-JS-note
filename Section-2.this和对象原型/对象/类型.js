console.log(typeof null); //object

const strPrimitive = "I am a string";
console.log(typeof strPrimitive); // "string"
console.log(strPrimitive instanceof String); // false
const strObject = new String("I am a string");
console.log(typeof strObject); // "object"
console.log(strObject instanceof String); // true
// 检查 sub-type 对象
console.log(Object.prototype.toString.call(strObject)); // [object String]
