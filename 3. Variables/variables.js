// atuomatically 
x = 5;
// using var 
var a = 6;
// using let 
let b = 10;
b = 3;  // we can modify let's value
{
    // let b = 3;  --- let has block scope
    // const c = 9;  --- const has block scope
}

// using const 
const c = 9;
// c = 10;  --- we can't modify const's value

document.getElementById("auto").innerHTML = "auto: "  + x;
document.getElementById("var").innerHTML = "var: "  + a;
document.getElementById("let").innerHTML = "let: "  + b;
document.getElementById("const").innerHTML = "const: "  + c;

