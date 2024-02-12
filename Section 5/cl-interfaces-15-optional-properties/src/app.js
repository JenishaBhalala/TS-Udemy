"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 21;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Heyy !');
        }
    }
}
let user1;
user1 = new Person();
// user1.name = 'Manu';
user1.greet('Hi there - I am');
console.log(user1);
