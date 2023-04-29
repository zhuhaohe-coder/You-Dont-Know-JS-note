function foo() {
  var a = 2;
  function baz() {
    console.log(a);
  }
  bar(baz);
}
function bar(fn) {
  fn();
}

foo(); //2

function wait(message) {
  setTimeout(function timer() {
    console.log(message);
  }, 1000);
}
wait("Hello, closure!");

for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i);
  }, i * 1000);
}

for (var i = 1; i <= 5; i++) {
  (function (j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}
