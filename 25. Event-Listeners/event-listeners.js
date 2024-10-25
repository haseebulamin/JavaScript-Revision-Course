// event-listeners
console.log("event-listeners")

let button = document.getElementById("btn");
let button1 = document.getElementById("btn1");

function clickEvent() {
    alert("I am alert!")
}

// add click Event
button.addEventListener('click', clickEvent)

// remove Event
button1.removeEventListener('click', clickEvent);