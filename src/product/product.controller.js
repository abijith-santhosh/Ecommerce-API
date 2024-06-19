import ProductRepository from "./product.repository.js";

export default class ProductController{
    constructor(){
        this.productRepository = new ProductRepository();
    }

    //Controller method for adding a product
    async create(req, res){
        const {name, quantity} = req.body;
        const product = await this.productRepository.addProduct(name, quantity);
        res.status(201).send(product);
    }

    //Controller method for fetching all products
    async getAll(req, res){
        const products = await this.productRepository.getAllProducts();
        res.status(200).send(products);
    }

    //Controller method for deleting a product based on its ID
    async delete(req, res){
        const id = req.params.id;
        const message = await this.productRepository.deleteProduct(id);
        res.status(200).send(message);
    }

    //Controller method for updating the quantity of a product based on its ID and number
    async updateQuantity(req, res){
        const id = req.params.id;
        const {number} = req.query;
        const message = await this.productRepository.updateQuantity(id, number);
        res.status(200).send(message);
    }
}