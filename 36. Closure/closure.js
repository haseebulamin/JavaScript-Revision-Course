// Closure
console.log("Closure");

function outer(outPara) {
    return function inner(inPara){
        console.log(`Outer: ${outPara}`)
        console.log(`Inner: ${inPara}`)
    }
}

const ClosureFunction = outer("Outside");

ClosureFunction("Inside");

// Encapsulation and Data Privacy
console.log("Encapsulation and Data Privacy")

function counter() {
    let count = 0;

    return {
        increment(){
            count++;
            console.log(count);
        },
        decreament(){
            count--;
            console.log(count);
        }
    }
}

const myCounter = counter();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.decreament();
myCounter.decreament();


// Callbacks and Event Listeners:
console.log("Callbacks and Event Listeners:")

function greet(name) {
    return function slam() {
        console.log(`Hello ${name}`)
    }    
}

const greeting = greet("Haseeb");
setTimeout(greeting, 2000);

// Functional Programming (Currying)
console.log("Functional Programming (Currying)")

function math(a) {
    return function multiply(b) {
        return a * b ;
    }    
}

const paper =  math(5);
console.log(paper(5));