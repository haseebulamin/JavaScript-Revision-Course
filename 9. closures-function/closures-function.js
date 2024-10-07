function output() {
    let i = 0;
    function inner() {
        i++;
        return i;
    }
    return inner;
}
let inc = output();
console.log(inc());
console.log(inc());
console.log(inc());
// console.log(x);