// array with numbers
console.log("simple array")
let number = [1,3,4]
console.log("print array")
console.log(number);
console.log("print array with index")
console.log(number[0]);
console.log(number[1]);
console.log(number[2]);

// array with fruits
let fruits = ["banana", "mango", "apple",]
console.log("print array with for-of")
for(let i of fruits){
    console.log(i);
}

// array with new keyword
console.log("array with new keyword")

let abc = new Array("A","B","C","D");
for(let i of abc){
    console.log(i);
}

// properties
console.log("array property | length")
console.log(abc.length);

// methods
console.log("array methods")

console.log("push")
fruits.push("graps")
console.log(fruits);

console.log("pop")
fruits.pop()
console.log(fruits);

console.log("unshift")
fruits.unshift("graps")
console.log(fruits);

console.log("shift")
fruits.shift()
console.log(fruits);

// finding elements in array
console.log("finding elements in array")

console.log("using Indexof")
console.log(fruits.indexOf("apple"));

console.log("using includes")
console.log(fruits.includes("apple"));

console.log(" Creates a new array")
let longFruits = fruits.filter(fruits => fruits.length > 5);
console.log(longFruits); // ['banana']

// foreach loop in js
console.log("foreach loop");
fruits.forEach((fruits)=>{
    console.log(fruits);
})