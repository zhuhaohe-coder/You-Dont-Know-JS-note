const myArray = [1, 2, 3];
// for (key in myArray) {
//   console.log(key);
// }
// console.log("============");
// for (value of myArray) {
//   console.log(value);
// }

// const it = myArray[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

const myObject = {
  a: 2,
  b: 3,
};

Object.defineProperty(myObject, Symbol.iterator, {
  enumerable: false,
  writable: false,
  configurable: true,
  value: function () {
    const o = this;
    let idx = 0;
    const ks = Object.keys(o);
    return {
      next: function () {
        return {
          value: o[ks[idx++]],
          done: idx > ks.length,
        };
      },
    };
  },
});
const it = myObject[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
for (let v of myObject) {
  console.log(v);
}
