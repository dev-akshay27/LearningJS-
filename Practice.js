let a = [
  { name: "prince", gender: "male" },
  { name: "ankita", gender: "female" },
  { name: "bhyiya", gender: "male" },
  { name: "aviral", gender: "male" },
  { name: "tanvi", gender: "female" },
  { name: "pawan", gender: "male" },
  { name: "shivani", gender: "female" },
];

// a.filter(()=>)
// let arrayFemaleByFilter = a.filter((elem) => elem.gender == "female");
// console.log(arrayFemaleByFilter);

let arrayMaleByloop = [];

for (i = 0; i < a.length; i++) {
  if (a[i].gender == "male") {
    a[i].name = "Raghu";
    arrayMaleByloop.push(a[i].name);
    // console.log(a[i].name);
  }
}
// console.log(a)
console.log(arrayMaleByloop);
