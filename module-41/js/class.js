"use strict";
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    getTotalPrice(tax) {
        const taxtAmount = this.price * tax / 100;
        const total = this.price + taxtAmount;
        return total;
    }
}
const toyota = new Car('toyota', 100000);
