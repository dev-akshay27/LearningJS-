let a = [
  { name: "prince", age: 20, gender: "male" },
  { name: "ankita", age: 300, gender: "female" },
  { name: "bhyiya", age: 40, gender: "male" },
  { name: "aviral", age: 40, gender: "male" },
  { name: "tanvi", age: 10, gender: "female" },
  { name: "pawan", age: 35, gender: "male" },
  { name: "shivani", age: 5, gender: "female" },
];

let arrayLoop = a.map((elem) => {
  if (elem.age < 300 && elem.gender === "female") {
    elem.age += 10;
  }
  return elem;
});


console.log(a)
console.log(">>>>>>>>>>>>>>>>")
console.log(a)