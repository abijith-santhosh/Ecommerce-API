import mongoose from "mongoose";
import productSchema from "./product.schema.js";

const productModel = mongoose.model("Product", productSchema);

export default class ProductRepository{
    //Repository method for creating products
    async addProduct(name, quantity){
        const product = new productModel({
            name,
            quantity
        })
        await product.save();
        return product;
    }

    //Repository method for fetching all products
    async getAllProducts(){
        const products = await productModel.find();
        return products;
    }
    
    //Repository method for deleting a product based on its ID
    async deleteProduct(id){
        const product=await productModel.findByIdAndDelete(id);
        if(!product){
            return "Product Not Found";
        }
        return "Product Deleted";
    }

    //Repository method for updating the quantity of a product based on its ID and number
    async updateQuantity(id, number){
        const result = await productModel.findByIdAndUpdate(id, { $inc: { quantity: number } });
        if (!result) {
            return "Product Not Found";
        }
        return "Updated Successfully";
    }
}