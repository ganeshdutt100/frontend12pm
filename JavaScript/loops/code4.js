// Armstrong number =>
//  153  = 1^3+5^3+3^3(153)
// 1 = 1
// 5 = 125
// 3= 27

let num = 153;
let temp = num;
let sum = 0;

while (temp > 0) {
  let digit = temp % 10;
  sum += digit ** 3;
  temp = Math.floor(temp / 10);
}
if (sum == num) {
  console.log("Armstrong number");
} else {
  console.log("not ARmstrong number ");
}
