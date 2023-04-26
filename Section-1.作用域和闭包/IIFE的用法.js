// 解决 undefined 标识符的默认值被错误覆盖导致的异常
undefined = true;
(function IIFE(undefined) {
  var a;
  if (a === undefined) {
    console.log("Undefined is safe here!");
  }
})();
// 倒置代码的运行顺序
/**
 * 函数表达式 def 定义在片段的第二部分，然后当作参数（这个参数也叫作 def）被传递进IIFE 函数定义的第一部分中。
 * 最后，参数 def（也就是传递进去的函数）被调用，并将window 传入当作 global 参数的值
 */
var a = 2;
(function IIFE(def) {
  def(window);
})(function def(global) {
  var a = 3;
  console.log(a); //3
  console.log(global.a); //2
});
