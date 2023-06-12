function getarray() {
  const a = [
    { name: "akshay", age: 28 },
    { name: "Prince", age: 21 },
    { name: "Rajesh", age: 10 },
    { name: "Pawan", age: 30 },
    { name: "Aviral", age: 50 },
    { name: "Vikas", age: 60 },
  ];
  return a;
}

function main() {
  for (let i = 0; i < getarray().length; i++) {
    ageComparison(getarray()[i].age);
  }
}

function ageComparison(age) {
  const status = getStatus(age, agelimit());
  getMessage(status, age, agelimit());
}

function getStatus(age, limit) {
  return age < limit;
  // console.log(age, limit);
}

function agelimit() {
  return 30;
}

// function echo(msg) {
//   console.log(msg);
// }

// console.log(agelimit());

function getMessage(status, age, limit) {
  let messgaeToBePrinted = "";
  switch (status) {
    case true:
      messgaeToBePrinted = lesserMessage(age, limit);
      break;
      case false:
        messgaeToBePrinted = greaterMessage(age, limit);
      break;
    }
    console.log(messgaeToBePrinted);
  }
  
  function greaterMessage(age, limit) {
    return `${age} is greater than ${limit}`;
  }
  
function lesserMessage(age, limit) {
  return `${age} is lesser than ${limit}`;
}

main();