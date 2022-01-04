// const person: {
//   name: string;
//   age: number;
// } = {
const person = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

let favouriteAcitivities: string[];
favouriteAcitivities = ["Sports", "Cooking"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
  
}
