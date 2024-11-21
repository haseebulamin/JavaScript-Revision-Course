// normal function
console.log("normal function")
function add(a,b) {
    return a+b;
}
console.log(add(3,5));

// currying function
console.log("currying")
function addOne(a) {
    return function addTwo(b) {
        return a+b;
    }
}
let addThree = addOne(6);
console.log(addThree(9));
console.log(addThree(19));

// Multi-Argument Currying
console.log("Multi-Argument Currying");
function first(a) {
    return function second(b) {
        return function third(c) {
            return a+b+c;
        }
    }
}
console.log(first(5)(9)(21));
