// syntax
// if (condition) {
// stm
// }
// let a = 90;

// if (a > 40) {
//   console.log(a);
// }
// if (a > 40) {
//   console.log("a is greater than 40");
// } else {
//   console.log("a is not greater than 40");
// }

// marks = 59;

// if (marks >= 90) {
//   console.log("Grade A");
// } else if (marks >= 80) {
//   console.log("Grade B");
// } else if (marks >= 70) {
//   console.log("Grade C");
// } else if (marks >= 60) {
//   console.log("Grade D");
// } else {
//   console.log("fail");
// }

// nested if else

// if (condition) {
//   if (condition) {
//     // stm
//   } else {
//     // stm
//   }
// } else {
//   // stm
// }

let username = "admin";
let password = "Admin@123";

if (username === "admin") {
  if (password === "Admin@123") {
    console.log("login success");
  } else {
    console.log("invalid password");
  }
} else {
  console.log("user not found");
}
