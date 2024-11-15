class animal{

    constructor(name){
        this.name = name;
    }

    sound(){
        console.log(`${name}'s sound`);
    }
}

class dog extends animal{

    constructor(name, breed){
        super(name);
        this.breed = breed;
    }

    sound(){
        console.log(`Breed of ${this.name} is ${this.breed} and he is barking`);
    }
}

class cat extends animal{

    constructor(name, breed){
        super(name);
        this.breed = breed;
    }

    sound(){
        console.log(`Breed of ${this.name} is ${this.breed} and he is doing meow meow.`);
    }
}

const dog1 = new dog("Shera","German shapered");
const cat1 = new cat("mano","perssion");
dog1.sound();
cat1.sound();
