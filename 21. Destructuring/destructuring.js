// destructuring
console.log("|-- destructuring");

let numbers = [1,2,3,4,5];

let [one,two, ...Rest] = numbers;
console.log(one)
console.log(two)
console.log(...Rest);

// skip value in destructuring
console.log("|-- skip value in destructuring");

let numbers2 = [1,2,3,4,5];

let [,,three,four,five] = numbers2;
console.log(three);
console.log(four);
console.log(five);

// Object destructuring
console.log("|-- Object destructuring");

let person = {
    name: "Haseeb",
    age: 18,
    sex: "male",
    address: {
        city: "Jakhar",
        tehsil: "Kamalia",
        district: "Toba Tek Singh"
    }
}

let {name,age,address} = person;
console.log(name);
console.log(age);
console.log(address);

// Nested Object Destructuring
console.log("|-- Nested Object Destructuring")
let {sex, address: {city,district}} = person;
console.log(sex);
console.log(city);
console.log(district);

// Default Values
console.log("|-- Default Values")
let {address: {tehsil}, role = "Web Developer"} = person;
console.log(tehsil);
console.log(role);
