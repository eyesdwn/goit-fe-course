'use strict';

class Car {
    constructor({speed = 0, price, maxSpeed, isOn = false, distance = 0}) {
        this.speed = speed;
        this._price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = isOn;
        this.distance = distance;
    }
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }
    turnOn() {
        this.isOn = true;
    }
    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }
    accelerate(value) {
        if(this.maxSpeed > this.speed + value) {
            this.speed += value;
            return this.speed;
        }
    }
    decelerate(value) {
        if (this.speed - value > 0) {
            this.speed -= value;
        }
    }
    drive(hours){
        if (this.isOn) {
            this.distance += hours * this.speed;
        }
    }

    static getSpecs({maxSpeed, speed, isOn, distance, price}) {
        return console.log(`maxSpeed: ${maxSpeed}, speed: ${speed}, isOn: ${isOn}, distance: ${distance}, price: ${price}`);
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 120, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000