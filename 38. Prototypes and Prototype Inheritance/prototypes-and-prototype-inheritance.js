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
