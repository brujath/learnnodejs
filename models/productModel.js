const fs = require('fs');

const path = require('path');

const filePath = path.join(path.dirname(process.mainModule.filename), "data", "products.json"); //resolves path on all os's, foldername, filename with extension

const getProductsFromFile = (callBack) => {
    
    fs.readFile(filePath, (err, fileContent) => {
        if(err) {
            callBack([]);
        } else {
            callBack(JSON.parse(fileContent));
        }
    });
};

//const Products = [];

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    addProduct() {
        //Products.push(this);

        getProductsFromFile(products => {
            products.push(this); // instance created while adding- will be a object with title.
            fs.writeFile(filePath, JSON.stringify(products), (err)=> {
                console.log(err);
            });
        });
    };

    //static method are used to call function with out initialization
    static getProducts(callBack) {
        getProductsFromFile(callBack);
        //return Products;
    }
}