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

//  Rest Operator
console.log("2.  Rest Operator");

// Rest with Arrays
console.log("Rest with Arrays");
let arr3 = [1,2,3,4,5,6];
let [one,two,...Rest] = arr3;
console.log(one)
console.log(two)
console.log(...Rest);

// Rest with Object
console.log("Rest with Object");
let obj2 = {
    name: "haseeb ul amin",
    age: 18,
    sex: "male"
};
let { name, ...other } = obj2;
console.log(name)
console.log(other);

// Rest with Function Parameters
console.log("Rest with Function Parameters");

function print(...number) {
    console.log(number);
}
print(1,2,3,4,5);