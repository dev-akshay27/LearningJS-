let a = [
  "prince",
  "ankita",
  "bhyiya",
  "aviral",
  "tanvi",
  "pawan",
  "shivani",
  "bhyiya",
  "chyiya",
];

// let arrayLoop = JSON.parse(JSON.stringify(a));
let arrayLoop = [...a];

for (i = 0; i < arrayLoop.length; i++) {
  if (arrayLoop[i] === "bhyiya") {
    arrayLoop[i] = "sayiya";
  }
}
console.log(">>>>>>>>>>>>>>>>>>>");
console.log(a);
console.log(arrayLoop);
