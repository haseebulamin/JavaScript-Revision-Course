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


// Callback Hell
document.write("Callback Hell")

setTimeout(() => {
    alert("set in 2000");
    setTimeout(() => {
        alert("set in next 2000");
        setTimeout(() => {
            alert("set in too next 2000");
        }, 2000);
    }, 2000);
}, 2000);