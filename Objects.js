const person = {
        firstname: 'Akshay',
        lastname: 'Kumar',
        age: 28,
        hobbies: ['playing piano', 'traveling','workout'],
        address: {
            street: 'Sec 71', 
            city: 'Mohali',
            state: 'punjab'
        }
}

// console.log(person.firstname, person.hobbies[01]);

//Assigning as variables 

// const { firstname, lastname, address: {city}} = person;   
//  console.log(city);

//We can add properties 

person.email = 'akshay@gmail.com';
console.log(person);