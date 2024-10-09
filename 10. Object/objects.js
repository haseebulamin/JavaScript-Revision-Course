/// 1
console.log("simple object");
let person = {
    name: "Haseeb",
    age: 18,
    Blood: 'B'
}

for(let i in person){
    console.log(i, ": ", person[i]);
}
console.log(person);

// 2
let car = {};

car.name = "BMW";
car.model = "F12";
car.number = "BKl420";

for(let i in car){
    console.log(i, ": ", car[i]);
}
console.log(car);

// object with new keyword
console.log("object with new object keyword");
let box = new Object();

box.height = "90m";
box.width = "70m";

for(let i in box){
    console.log(i, ": ", box[i]);
}
console.log(box);