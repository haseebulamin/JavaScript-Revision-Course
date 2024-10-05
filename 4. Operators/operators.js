// arithmatic Operators
console.log("1. arithmatic operators") 
console.log("9+3 = ", 9+3);
console.log("9-3 = ", 9-3);
console.log("9*3 = ", 9*3);
console.log("9/3 = ", 9/3);
console.log("9%3 = ", 9%3);

// Assignment Operators
console.log("2. Assignment operators") 
let x = 10;
x += 5;
console.log("x += 5 = ", x);  // 15
x -= 3;
console.log("x -= 3 = ", x);  // 12
x *= 2;
console.log("x *= 2 = ", x);  // 24
x /= 4;
console.log("x /= 4 = ", x);  // 6
x %= 3;
console.log("x %= 3 = ", x);  // 0
x **= 2;
console.log("x **= 2 = ", x);  // 0

// Comparison Operators
console.log("3. Comparison operators") 
let y = 5, z = '5';
console.log("y == z = ", y == z);    // Equal (value): true
console.log("y === z = ", y === z);  // Strict Equal (type and value): false
console.log("y != z = ", y != z);    // Not equal (value): false
console.log("y !== z = ", y !== z);  // Strict Not Equal (type and value): true
console.log("y > 3 = ", y > 3);      // Greater than: true
console.log("y < 3 = ", y < 3);      // Less than: false
console.log("y >= 5 = ", y >= 5);    // Greater than or equal: true
console.log("y <= 5 = ", y <= 5);    // Less than or equal: true

//  Logical Operators
console.log("4. logical operators") 
let p = true, q = false;
console.log("p && q = ", p && q);  // AND: false
console.log("p || q = ", p || q);  // OR: true
console.log("!p = ", !p);          // NOT: false

// Bitwise Operators
console.log("5. bitwise operators") 
let m = 5;  // 101 in binary
let n = 1;  // 001 in binary
console.log("m & n = ", m & n);  // AND: 1
console.log("m | n = ", m | n);  // OR: 5
console.log("m ^ n = ", m ^ n);  // XOR: 4
console.log("~m = ", ~m);        // NOT: -6
console.log("m << 1 = ", m << 1); // Left shift: 10
console.log("m >> 1 = ", m >> 1); // Right shift: 2
console.log("m >>> 1 = ", m >>> 1); // Unsigned right shift: 2

// Ternary Operator
console.log("6. ternary operators") 
let age = 18;
let canVote = age >= 18 ? 'Yes' : 'No';
console.log("age >= 18 ? 'Yes' : 'No' = ", canVote);  // "Yes"

// Type Operators
console.log("7. type operators") 
let name = "John";
let isLoggedIn = true;

console.log("typeof name = ", typeof name);             // "string"
console.log("typeof isLoggedIn = ", typeof isLoggedIn); // "boolean"

let arr = [1, 2, 3];
console.log("arr instanceof Array = ", arr instanceof Array);  // true

// string operators
console.log("8. string operators") 
let firstName = "John";
let lastName = "Doe";
console.log("firstName + ' ' + lastName = ", firstName + ' ' + lastName);  // "John Doe"

let greeting = "Hello";
greeting += " World";
console.log("greeting += ' World' = ", greeting);  // "Hello World"

// unary operators
console.log("9. unary operators") 
let count = 5;
console.log("++count = ", ++count);  // Pre-increment: 6
console.log("count++ = ", count++);  // Post-increment: 6
console.log("count after count++ = ", count);  // 7

console.log("--count = ", --count);  // Pre-decrement: 6
console.log("count-- = ", count--);  // Post-decrement: 6
console.log("count after count-- = ", count);  // 5

