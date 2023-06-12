console.log(window);

// single element Selectore

console.log(document.getElementById('my-form'));
const form = document.getElementById("my-form");
console.log(form);

//We can access anything with query selector as [classes, tags, id's, div, etc]
console.log(document.querySelector(".container"));
console.log(document.querySelector("h1"));

//multiple elements

//console.log(document.querySelectorAll("items")); // Recommended
console.log(document.getElementsByClassName("items")); //With HTML collection you can't use array methods you have to convert them first mannually
console.log(document.getElementsByTagName("li"));

const items = document.querySelectorAll(".items");

items.forEach((items) => console.log(items));

// Changing things in DOM - Manipulation on [UI] level

const ul = document.querySelector(".items");

ul.remove();

ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "brad";
ul.lastElementChild.innerHTML = "<h3>Akshay</h3>";

const btn = document.querySelector(".btn");
btn.style.background = "yellow";

const btn = document.querySelector('.btn');

btn.addEventListener('Click', (e) => {
  e.preventDefault();
  console.log(e.target); //('click');
}); //Not Working ---- // Event Listener takes 2 parameters 1. Action you want to perform || 2. Function (Event parameter) - using event takes event parameter as (e) taken

const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", (e) => {
  e.preventDefault();
  document.querySelector("#my-form").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value ==='' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = ' Please enter all fields';

        setTimeout(() => msg.remove(), 3000);
        }else{
            // console.log('success');
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.vlaue}`));
            userList.appendChild(li);

            //Clear fields
            nameInput.value = '';
            emailInput.value = '';
        }
    }

