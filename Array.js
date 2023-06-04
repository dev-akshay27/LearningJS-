//Array
const fruits = ["apple", "oranges", "grapes"];

//Add element in array
fruits.push("pears");
//add element to the end of array - this mehtod is not optimal(as you don't know how many values are there) so consider PUSH() method
// fruits[4]= 'pine';

//Add element to the end of array
fruits.push("mangos");

//Add element to the begining of an array
fruits.unshift("Tomatos");

//To delete an element of array use this method 
fruits.pop('mangos');

//isArray method will return with the true & false method 
console.log(Array.isArray(fruits)); console.log(Array.isArray('hello'));

//Check the index of particular element
console.log(fruits.indexOf('oranges'));



console.log(fruits);
