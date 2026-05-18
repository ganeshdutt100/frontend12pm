// let personName = "Aqsa";
// let age = "23";
// let course = "fullstack ";

// let person = {
//   // key  :  values
//   name: "Divya",
//   age: 23,
//   course: "Frontend",
//   address: "Delhi",
//   number: 876545678,
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.age);
// console.log(person.course);
// console.log(person.address);

// for (i in person) {
//   console.log(`${i} : ${person[i]}`);
// }

// const person = {
//   name: "priya",
//   " home town": "delhi",
//   age: 21,
// };
// delete person.age;

// console.log(person.name);
// console.log(person[" home town"]);

// person.name = "Vaibhav";
// console.log(person.name);

// console.log(person);
// let sum = {
//   num1: 12,
//   num2: 34,
//   add: function () {
//     return this.num1 + this.num2;
//   },
// };
// console.log(sum.add());

// const course = { title: "course", frontend: "12345", backend: "23456" };

// const { title, frontend, backend } = course;
// console.log(title, frontend, backend);

// let obj1 = {
//   name: "priya",
//   age: 23,
//   course: "fs",
//   address: "Delhi",
// };
// let obj2 = {
//   name: "divya",
//   age: 24,
//   course: "backend",
// };
// let finalResult = { ...obj1, ...obj2 };
// console.log(finalResult);

// let obj1 = {
//   name: "priya",
//   age: 23,
//   course: "fs",
//   address: "Delhi",
// };

// let obj2 = {
//   ...obj1,
//   number: 87654378,
//   testMarks: 87,
// };
// console.log(obj2);

let obj1 = {
  name: "priya",
  age: 23,
  course: "fs",
  address: "Delhi",
};
console.log(Object.keys(obj1));
console.log(Object.values(obj1));
