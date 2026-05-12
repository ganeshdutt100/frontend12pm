// Iteration Methods
let a = [12, 13, 14, 15, 16];
// for (let x of a.entries()) {
//   console.log(x);
// }
// let index = a.findIndex((x) => x % 2 == 0);
// let map = a.map((x) => x * 2);
// let filterEvn = a.filter((x) => x % 2 == 0);
// let Evn = a.some((x) => x % 2 == 0);
// let allEvn = a.every((x) => x % 2 == 0);
// let reduceSum = a.reduce((a, b) => a + b);

// console.log(map);
// sum = 0;
// for (let x of a) {
//   sum += x;
// }
// console.log(reduceSum);

// console.log(a);
// [[0,12],[1,13],[2,14],[3,15],[4,16]]
// acc = 0 + 5 + 6 + 8 + 8 + 4 + 4;

// for (let value of a.values()) {
//   console.log(value);
// }
for (let key of a.keys()) {
  console.log(key);
}
