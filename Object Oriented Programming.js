// We can create constructive functions with two types prototypes & es6
// Constructive function always start with Capital letter

function Person(FirstName, LastName, dob) {
  this.FirstName = FirstName;
  this.LastName = LastName;
  this.dob = new Date(dob);
    this.getByear = function () {
      return this.dob.getFullYear();
    };
    this.getFname = function () {
      return `${FirstName} ${LastName}`;
    };
}

// PROTOTYPE: Creating functions for fullname and DOB with prototype [Wrok same as above]
Person.prototype.getByear = function () {
  return this.dob.getFullYear();
};

Person.prototype.getFname = function () {
  return `${this.FirstName} ${this.LastName}`;
}


// CLASSES

class Person {
     constructor(FirstName, LastName, dob){
          this.FirstName = FirstName;
          this.LastName = LastName;
          this.dob = new Date(dob);
     }
     getByear() {
          return this.dob.getFullYear();
     }
     getFname() {
          return `${this.FirstName} ${this.LastName}`;
     }
}




// Instatiate Object - Instances of Constructor function
const person1 = new Person("AKshay", "Kumar", "3-27-1995");
const person2 = new Person("Ravi", "Kumar", "2-29-1980");
const person3 = new Person("Prince", "Kumar", "2-2-1970");
console.log(person2.getByear());
console.log(person2.getFname());
