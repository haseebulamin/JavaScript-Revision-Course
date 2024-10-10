// object methods
let person = {
    Fname: "Haseeb",
    Lname: "Ul Amin",
    age: 18,
    Fullname: function() {
        return this.Fname + " " + this.Lname;
    }
}
let Fullname = person.Fullname();
console.log(Fullname);