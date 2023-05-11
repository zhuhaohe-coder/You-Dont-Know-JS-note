/*
var myObject = {};
Object.defineProperty(myObject, "FAVORITE_NUMBER", {
  value: [42],
  writable: false,
  configurable: false,
});
myObject.FAVORITE_NUMBER.push(7);
console.log(myObject.FAVORITE_NUMBER); //[ 42, 7 ]
*/
var myObject = {
  a: 2,
};
Object.preventExtensions(myObject);
myObject.b = 3;
console.log(myObject.b); // undefined
