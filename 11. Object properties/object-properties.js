// object 
const men = {
    name: "haseeb"
}
// object properties
console.log("object properties");
let name = men.name;
console.log(name);

let name1 = men["name"];
console.log(name1);

let x = "name";
let name2 =  men[x];
console.log(name2);

// add property
console.log("add property");
men.age = "18";
console.log(men);

// delete property
console.log("delete property");
delete men.age;
console.log(men);
