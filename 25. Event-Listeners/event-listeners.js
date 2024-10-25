// event-listeners
console.log("event-listeners");

let button = document.getElementById("btn");
let button1 = document.getElementById("btn1");
const parent = document.getElementById("parent");
const child = document.getElementById("child");
const inputField = document.getElementById("inputField");

function clickEvent() {
  console.log("This is Event");
}

// add click Event
console.log("1. Add Event");
button.addEventListener("click", clickEvent);

// remove Event
console.log("2. Remove Event");
button1.removeEventListener("click", clickEvent);

//  Event Object
console.log("3. Event Object");

button.addEventListener("click", function (event) {
  console.log("Event type:", event.type); // Output: 'click'
  console.log("Button text:", event.target.textContent); // Output: 'Click Me'
});

// Event Listener Options
console.log("4. Event Listener Options");

button.addEventListener(
  "click",
  function () {
    console.log("Button clicked!");
  },
  { once: false }
);

// Event Propagation: Capturing and Bubbling
console.log("Event Propagation: Capturing and Bubbling");

parent.addEventListener("click", () => console.log("Parent clicked!"));
child.addEventListener("click", (event) => {
  console.log("Button clicked!");
  event.stopPropagation();
});

// Example: Listening to Key Presses
console.log("Example: Listening to Key Presses");
inputField.addEventListener("keydown", function (event) {
  console.log(`You pressed: ${event.key}`);
});
