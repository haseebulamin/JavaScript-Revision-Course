// destructuring
console.log("destructuring");

let numbers = [1,2,3,4,5];

let [one,two, ...Rest] = numbers;
console.log(one)
console.log(two)
console.log(...Rest);