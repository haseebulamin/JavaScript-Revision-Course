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