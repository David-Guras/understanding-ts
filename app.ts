const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

person.role.push("admin"); // tuples allow for push operation

let favouriteAcitivities: string[];
favouriteAcitivities = ["Sports", "Cooking"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
