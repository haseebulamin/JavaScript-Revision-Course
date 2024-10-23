/// callback

function greet(name) {
    document.write(`My name is ${name}.`);
}

function funcForcallback(callback) {
    let name = "Haseeb Ul Amin";
    callback(name);
}

funcForcallback(greet);