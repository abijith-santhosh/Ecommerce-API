import express from 'express';
import ProductController from './product.controller.js';

//Creating product router
const productRouter = express.Router();

const productController = new ProductController();

//Route for adding a product
productRouter.post('/create', (req,res)=>{
    productController.create(req,res)
});

//Route for fetching all products
productRouter.get('/', (req,res)=>{
    productController.getAll(req,res)
});

//Route for deleting a product based on its ID
productRouter.delete('/:id', (req,res)=>{
    productController.delete(req,res)
});

//Route for updating a product(can be incremented or decremented) based on its ID and number
productRouter.post('/:id/update-quantity/', (req,res)=>{
    productController.updateQuantity(req,res)
});

export default productRouter;


