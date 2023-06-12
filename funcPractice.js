function arr() {
  let a = [
    { names: "Ashu", age: 28, gender: "Male" },
    { names: "Shivani", age: 20, gender: "Female" },
    { names: "Vishal", age: 25, gender: "Male" },
    { names: "Tanu", age: 23, gender: "Female" },
    { names: "Rishu", age: 26, gender: "Male" },
  ];
  return a;
}
// console.log(arr());

function fill(b) {
  b.push(
    { names: "Rajni", age: 27, gender: "Male" },
    { names: "Rani", age: 29, gender: "Male" }
  );
  //   console.log(b);
  return b;
}
const updatedArray = fill(arr());

function agefil() {
  for (let i = 0; i < updatedArray.length; i++) {
    getStatus(updatedArray[i].age);
  }
  return "done";
}

function getStatus(a) {
  console.log(a);
}

const mesg = agefil();
// console.log(mesg)


//=======================================================================

//2nd Program

// function arr() {
//   const a = ["kela", "banana", "tarbooz", "musk"];
//   fill();
//   return a;
// }
// console.log(arr());

// function fill() {
//   const c = arr.push("Loda");
//   return c;
// }

// function arr() {
//     const a = [
//       { names: "Ashu", age: 28, gender: "Male" },
//       { names: "Shivani", age: 20, gender: "Female" },
//       { names: "Vishal", age: 25, gender: "Female" },
//       { names: "Tanu", age: 23, gender: "Female" },
//       { names: "Rishu", age: 26, gender: "Female" },
//     ];
//     return a;
//   }
  
//   function fill(a) {
//     a.push({ names: "Rinku", age: 26, gender: "Female" });
//     return a;
//   }
//   const newArr = fill(arr());
  
//   console.log(newArr)
  