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

// TASK 3: CREATING AN INVENTORY CLASS

// Create an Inventory class
class Inventory {
    constructor() {
        this.products = [];  
    }
    addProduct(product) {
        this.products.push(product); // Adds a new product to inventory
}
    listProducts() { // Logs all products' details
        this.products.forEach(product => console.log(product.getDetails()));
    }
}
const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts();

// TASK 4: IMPLEMENTING ORDER MANAGEMENT

// Add a orders array in the Inventory class
class InventoryWithOrders extends Inventory { // Add a orders array in the Inventory class
    constructor() {
        super()
        this.orders = [];
    }
    placeOrder(orderId, product, quantity) { // Creates a new order and adds it to orders if stock is available
        if (product.stock >= quantity) {
            let order = new Order(orderId, product, quantity);
            this.orders.push(order);
            console.log("success");
        } else {
            console.log("Error");
        }
    }
    listOrders() { // Logs all placed orders
        if (this.orders.length === 0) {
            console.log("no order placed");
        } else {
        this.orders.forEach(order => console.log(order.getOrderDetails()));
        }
    }
}
const inventoryWithOrders = new InventoryWithOrders();
inventoryWithOrders.addProduct(prod1);
inventoryWithOrders.placeOrder(601, prod1, 2);
inventoryWithOrders.listOrders();
console.log(prod1.getDetails());

// TASK 5: IMPLEMENTING PRODUCT RESTOCKING

// Add a method in the Inventory class
class InventoryWithRestocking extends InventoryWithOrders {
    restockProduct(productId, quantity) {
        const product = this.products.find(prod => prod.id === productId);
        if (product) {
            product.stock += quantity; // The method should increase the stock of the product 
        } else {
            console.log("No inventory"); // The message that is returned if stock is not increased
        }
    }
}
const inventoryWithRestocking = new InventoryWithRestocking();
inventoryWithRestocking.addProduct(prod1);
inventoryWithRestocking.restockProduct(101, 5);
console.log(prod1.getDetails());
