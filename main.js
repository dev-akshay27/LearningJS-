const names = "Akshay";
// const age = 28;

// //concatenation
// console.log("My name is " + name + " and age is " + age);
// console.log(`My name is ${name} and i am    ${age}`);

//array
let a = ["Rahul", "Prince", "akshay", "Vikas", "Pawan", "Rajesh"];

//  names= names.toLowerCase();

console.log(a.indexOf(names.toLowerCase()));
//objects
const studenData = {
  name: "user",
  roll: 33,
  lastName: "kohli",
};
for (const key in studenData) {
  console.log("key>>>", studenData[key]);
}
