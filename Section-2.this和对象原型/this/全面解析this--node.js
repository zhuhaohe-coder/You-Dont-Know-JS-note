function foo() {
  console.log(this); //global
  console.log(this.a); //undefined
}
var a = 2;
foo();
