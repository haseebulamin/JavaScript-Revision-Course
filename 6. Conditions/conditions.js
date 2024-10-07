// if 
console.log("if")
let age = 18;
if(age<=18){
    console.log("Age less than 18")
}

// if else
console.log("if else")
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

// if else if 
console.log("if else if")
let marks = 85;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 80) {
  console.log("Grade: B");
} else if (marks >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Switch 
console.log("switch")
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Invalid day");
}

// Ternary 
console.log("ternary")
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Output: Yes
