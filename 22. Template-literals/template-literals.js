// template-literals
console.log("template-literals");

//back ticks
console.log("back ticks")
console.log(`hello world`);

// back tick embed variables
console.log("back tick embed variables")
let name = "Haseeb Ul Amin";
console.log(`i am ${name}`);

// String Interpolation with Template Literals
console.log("String Interpolation with Template Literals");
let a = 5;
let b = 10;
console.log(`Sum of ${a} and ${b} is ${a+b}.`)

// Multi-line Strings using Template Literals
console.log("Multi-line Strings using Template Literals")

let poem = `Twinkle twinkle little star
How I wonder what you are
Up above the world so high
Like a diamond in the sky`;

console.log(poem);

// Embedding Expressions and Functions
console.log("Embedding Expressions and Functions")

let person = {
    myname: "haseeb",
    age: 18
}
let greeting = `HI ${person.myname}, you are ${person.age<=19?"an teenager":"not teenager"}`;
console.log(greeting);
