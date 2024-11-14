// class 
class car{
    // constructor
    constructor(model,nmbr){
        this.model = model;
        this.Number = nmbr;
    }

    // methods 
    print() {
        console.log(`Car Model: ${this.model} \nCar Number: ${this.Number}`)
    }
}

// object 
const car1 = new car("BMW","ARk 786")
const car2 = new car("Audi","SkH 333")
car1.print();
car2.print();