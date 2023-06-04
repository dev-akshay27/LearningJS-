let a = [
  { name: "prince", age: 20, gender: "male" },
  { name: "ankita", age: 300, gender: "female" },
  { name: "bhyiya", age: 40, gender: "male" },
  { name: "aviral", age: 40, gender: "male" },
  { name: "tanvi", age: 10, gender: "female" },
  { name: "pawan", age: 35, gender: "male" },
  { name: "shivani", age: 5, gender: "female" },
];

let arrayLoop = JSON.parse(JSON.stringify(a));

for (i = 0; i < arrayLoop.length; i++) {
  if (arrayLoop[i].age < 300 && arrayLoop[i].gender === "female") {
    arrayLoop[i].age += 10;
  }
}
console.log(arrayLoop);
console.log(">>>>>>>>>>>>>>>>>>>");
console.log(a);
