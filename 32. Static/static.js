class math{
    static PI = 3.14;

    static area(radius){
        return this.PI * radius * radius;
    }
}

console.log(math.PI);
console.log(math.area(5));