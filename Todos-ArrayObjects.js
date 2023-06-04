const todos = [
  {
    id: 1,
    text: "Workout",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Breakfast",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Going out",
    isCompleted: false,
  },
];
// console.log(todos[2].text);
// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON)

//ForLoop
// for(let i=0; i<10; i++){
//     console.log(i)
// }

//While
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// for(let todo of todos){
//     console.log(todo.text)
// }

//ForEach function is a call back method take multiple parameters in 1st will always be the variable we want as each item
// todos.forEach(function (todo) {
//   console.log(todo.text);
// });

//Map return an array 
// const todotext = todos.map(function (todo) {
//     return todo.text;
//   });
//   console.log(todotext)

//Filter 
// const todoCompleted = todos.filter(function (todo) {
//         return todo.isCompleted;
//       });
//       console.log(todoCompleted)

//Data Manipulation by function 
      const todoCompleted = todos.filter(function (todo) {
        return todo.isCompleted;
      }).map(function(todo){
        return todo.text;
      })
      console.log(todoCompleted);