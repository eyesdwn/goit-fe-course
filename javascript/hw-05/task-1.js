'use strict';

class Account {
    constructor(name, email) {
        this.name = name;
        this.email = email;
          
    }
    getInfo() {
        console.log(`Login: ${this.name}, Email: ${this.email}`);
    }
}

console.log(Account.prototype.getInfo); // function

const mango = new Account('Mangozedog', 'mango@dog.woof');
mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account('Poly', 'poly@mail.com');
poly.getInfo(); // Login: Poly, Email: poly@mail.com

