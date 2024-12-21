console.log("mlsa-event");

const greeting = ()=>{
    console.log("hello gays!")
}

greeting();

let a = 10;

console.log("This is hoisting", a);

document.addEventListener("DOMContentLoaded", () => {
    let title = document.getElementById("title");
    title.style.backgroundColor = "red";
  });

  document.addEventListener("DOMContentLoaded", () => {
    let title = document.getElementById("title");
    title.style.backgroundColor = "orange";
  });

  document.addEventListener("DOMContentLoaded", () => {
    let title = document.getElementById("title");
    title.style.backgroundColor = "green";
  });