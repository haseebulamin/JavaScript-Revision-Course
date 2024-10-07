// function declaration
console.log("function declaration");
function add(a,b) {
    console.log(a+b)
}
add(6,8);

// function expression
console.log("function expression");
const square = (a)=>{
    console.log(a*a);
}
square(5);

// function return value
console.log("function return value");
function multi(c,d) {
    return c*d;
}
let x = multi(3,4);
console.log(x);

// function parameter
console.log("function declaration");
function para(a) {
    console.log(a)
}
para("this is parameterize function");
