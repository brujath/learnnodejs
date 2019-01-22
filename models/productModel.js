const Products = [];

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    addProduct() {
        Products.push(this);
    };

    static getProducts() {
        return Products;
    }
}