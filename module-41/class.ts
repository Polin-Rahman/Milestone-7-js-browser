class Car {
    model: string;
    price: number;

    constructor(model: string, price: number) {
        this.model = model;
        this.price = price;
    }
    getTotalPrice(tax: number): number {
        const taxtAmount = this.price * tax / 100;
        const total = this.price + taxtAmount;
        return total;
    }
}

const toyota = new Car('toyota', 100000);
