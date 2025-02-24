// TASK 1: CREATING A PRODUCT CLASS

// Create a class Product with the following properties
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }
    getDetails() { // Add a method getDetails() that returns a formatted string of product details
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }
    updateStock(quantity) { // Add a method updateStock(quantity) that modifies the stock level when an order is placed
        this.stock -= quantity; 
    }
}
// Test Cases
const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails());

prod1.updateStock(3);
console.log(prod1.getDetails());

// TASK 2: CREATING AN ORDER CLASS

// Create a class Order with the following properties
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        if (this.product.stock >= this.quantity) {
            this.product.updateStock(this.quantity);
        } else {
            console.log("error");
        }
    }
    getOrderDetails() { // Add a method getOrderDetails() that returns order details
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.quantity * this.product.price}`;
    }
}
const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails());

console.log(prod1.getDetails());
