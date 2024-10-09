/// 1
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