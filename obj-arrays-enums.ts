// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Max",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

//person.role.push("admin"); // tuples allow for push operation

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
};

const person = {
    name: "Max",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
  };
  
  

let favouriteAcitivities: string[];
favouriteAcitivities = ["Sports", "Cooking"];

console.log(person.name);

if (person.role === Role.ADMIN) {
    console.log("is admin");
    
}

for (const hobby of person.hobbies) {
  console.log(hobby.toLocaleUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}
