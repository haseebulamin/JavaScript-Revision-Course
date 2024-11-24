// object prototype 
const animal = {
    eats: true,
    walk() {
        console.log("Animal walks");
    }
};

const dog = Object.create(animal);
dog.barks = true;

console.log(dog.eats); // Output: true (inherited from `animal`)
dog.walk();            // Output: "Animal walks" (method from `animal`)
console.log(dog.barks); // Output: true (own property)

// prototype inheritance 
function Person(name){
    this.name = name;
}

Person.prototype.greet = function (name) {
    console.log(`Helloooo! kasy ho?`)
}

const haseeb = new Person("Haseeb");
console.log(haseeb.name);
haseeb.greet();
