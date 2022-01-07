//const cannot be changed
const anotherName = "David";

//let has block scope
let age = 35;

//arrow function
const addStuff = (a: number, b: number) =>  a + b;

//variation of arrow function
const button = document.querySelector("button");

if (button) {
    button.addEventListener('click', event => console.log(event));
}