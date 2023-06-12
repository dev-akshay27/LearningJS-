// || returns the first truthy value.
// ?? returns the first defined value.

// let b = 5;
// let a;

// if (a ?? b);
// {
//   console.log(b);
// }

let fname = null;
let lname = null;
let nickname = "superman";

alert (fname || lname || nickname || "anonymous"); 
//{
//   console.log("anonymous");
// }
