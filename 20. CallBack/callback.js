/// callback

function greet(name) {
    document.write(`My name is ${name}.`);
}

function funcForcallback(callback) {
    let name = "Haseeb Ul Amin";
    callback(name);
}

funcForcallback(greet);

// setTimeOut as Callback
console.log(" | Start | ");

setTimeout(() => {
    alert("SetTime out is running.")
}, 3000);

console.log(" | End | ");