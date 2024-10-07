// for 
console.log("For loop");
for (let i = 0; i < 5; i++) {
    console.log(i);  
  }  

// while loop 
console.log("While loop");
let k = 0;
while (k < 5) {
  console.log(k);
  k++;  // Output: 0, 1, 2, 3, 4
}

// while loop 
console.log("Do While loop");
let l = 0;
do {
  console.log(l);
  l++;
} while (l < 5); 

// For in loop
console.log("For-in loop");
const person = { name: "John", age: 30, city: "New York" };
for (let key in person) {
  console.log(key + ": " + person[key]);  
}

// For of loop
console.log("For-of loop");
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log(number);  // Output: 1, 2, 3, 4, 5
}

