// const cannot be changed
const anotherName = "David";

// let has block scope
let age = 35;

// arrow function
const addStuff = (a: number, b: number) => a + b;

// defatul values for parameters, can be called with one argument
// parameters without default should come first
const addMoreStuff = (a: number, b: number = 1) => a + b;

// variation of arrow function
const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

// spread operator
const hobbies = ["Sports", "Hobbies"];
const activeHobbies = ["Hiking", ...hobbies];

activeHobbies.push(...hobbies);

// spread operator also exists on objects
const somePerson = {
  name: "David",
  height: "6'3''",
};
const copiedPerson = { ...somePerson };

// rest parameters
const someAdd = (...numbers: number[]) => {
  let result = 0;
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const someAddedNumber = someAdd(5, 10, 2, 3.5, 98);
console.log(someAddedNumber);
