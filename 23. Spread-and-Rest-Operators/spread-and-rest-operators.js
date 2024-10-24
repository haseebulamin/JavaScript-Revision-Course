console.log("spread-and-rest-operators")

// Spread Operator 
console.log("1. Spread Operator ");

// Spread with Arrays
console.log("Spread with Arrays");
 let arr = [1,2,3,4,5];
 console.log(...arr);

// Spread with object
console.log("Spread with object");
let obj = {
    name: "haseeb ul amin",
    age: 18,
    sex: "male"
};
let obj_spread = {...obj};
console.log(obj_spread);

// Spread in Function Arguments
console.log("Spread in Function Arguments")

function add(a,b,c) {
    console.log("Sum = ", a+b+c);
}
let arr1 = [3,6,11];
add(...arr1);