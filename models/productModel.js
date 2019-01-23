const fs = require('fs');

const path = require('path');

//const Products = [];

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    addProduct() {
        //Products.push(this);
        const filePath = path.join(path.dirname(process.mainModule.filename), "data", "products.json"); //resolves path on all os's, foldername, filename with extension
        fs.readFile(filePath, (err, fileContent)=> {
            let products = [];
            if(!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this); // instance created while adding- will be a object with title.
            fs.writeFile(filePath, JSON.stringify(products), (err)=> {
                console.log(err);
            });
        })
    };

    //static method are used to call function with out initialization
    static getProducts(callBack) {
        const filePath = path.join(path.dirname(process.mainModule.filename), "data", "products.json"); //resolves path on all os's, foldername, filename with extension
        fs.readFile(filePath, (err, fileContent) => {
            if(err) {
                callBack([]);
            }

            callBack(JSON.parse(fileContent));
        });
        //return Products;
    }
}