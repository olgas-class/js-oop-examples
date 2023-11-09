// let person = {
//     firstName: "Mario",
//     lastName: "Bianchi",
//     age: 34,
// 
//     getFullName: function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }
// 
// console.log(person.getFullName());
// console.log(person.hasOwnProperty("firstName"));
// console.log(person.age);
// 
// console.log(person);

// Dichiarazione di una classe
class Person {
    firstName;
    lastName;
    age;

    constructor(_firstName, _lastName, _age) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


const mario = new Person("Mario", "Bianchi", 32);
console.log(mario);

// mario.firstName = "Mario";
// mario.lastName = "Bianchi";
// mario.age = 32;

console.log(mario.getFullName());


const pippo = new Person("Pippo", "Neri", 23);
console.log(pippo);
console.log(pippo.getFullName());

const people = [
    mario,
    pippo,
    new Person("Pluto", "Verdi", 18)
];

console.log(people);