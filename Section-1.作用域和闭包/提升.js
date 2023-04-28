a = 2;
var a;
console.log(a); //2
/**
 * 实际运行顺序
 * var a;
 * a = 2;
 * console.log( a )
 */

console.log(b);
var b = 2; //undefined
/**
 * 实际运行顺序
 * var a;
 * console.log( a );
 * a = 2;
 */

//函数声明会被提升，但是函数表达式却不会被提升。
baz(); //123123
function baz() {
  console.log("123123");
}

foo(); //TypeError: foo is not a function
bar(); // ReferenceError
var foo = function bar() {
  console.log("...");
};

/**
 * var foo;
 * foo(); // TypeError
 * bar(); // ReferenceError
 * foo = function() {
    var bar = ...self...
    console.log("...");
   }
 */
