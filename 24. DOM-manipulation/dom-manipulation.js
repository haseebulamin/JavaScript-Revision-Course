// DOM Manipulation
console.log("DOM Manipulation");

// Selecting Elements
console.log("1. Selecting Elements");
let id = document.getElementById("id");
let classs = document.getElementsByClassName("class");
let tag = document.getElementsByTagName("p");
let querySelector = document.querySelector(".querySelector");
let querySelectorAll = document.querySelectorAll(".querySelectorAll");
const image = document.querySelector("img");

// prints
console.log(id);
console.log(classs);
console.log(tag);
console.log(querySelector);
console.log(querySelectorAll);

// 2. Changing Content
console.log("2. Changing Content");
console.log("Style");
id.style.backgroundColor = "red";
console.log("update");
id.textContent = "Update id";

// 3. Modifying Attributes
console.log("3. Modifying Attributes")
image.setAttribute('src', 'pure.png')
console.log(image.getAttribute('src'))
image.removeAttribute('alt');