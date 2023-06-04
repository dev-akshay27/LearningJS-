const x = 10;
const y = 15;

// // == Just match the value not the data type
// // if (x == 10){ console.log("x is 10");
// // }
// // === is strictly used for data types [higher accuracy]
// // if (x === '10') {
// //   console.log("x is 10");
// // }else if(x>5) {
// //     console.log('that is true');
// // } else{
// //     console.log('x is Not 10');
// // }

// if (x < 8 || y > 17) {
//   console.log("x is more than 5 or y is more than 10");
// }


// ? is a Ternary Operator & and : is considered else  
const color = x > 5 ? 'red' : 'blue';

console.log(color);  

// Switch statement

switch(color) {
    case 'red':
        console.log('color is red')
        break;
        case 'blue':
        console.log('color is blue')
        break;
    default:
            console.log('Color is not red or blue');
            break;
}
