// Using a Function and a Variable
console.log("Using a Function and a Variable")
const Singleton = (function () {
    let instance;

    function createInstance() {
        return { name: "I am the Singleton instance" };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Accessing the Singleton
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // Output: true (both are the same instance)


// using class
console.log("using class");
class Singleton1 {
    constructor() {
        if (Singleton.instance) {
            return Singleton.instance;
        }
        Singleton.instance = this;

        this.data = "I am the Singleton instance";
    }
}

const instance3 = new Singleton1();
const instance4 = new Singleton1();

console.log(instance1 === instance2); // Output: true
console.log(instance1.data);          // Output: I am the Singleton instance
