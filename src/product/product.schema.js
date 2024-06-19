import mongoose from 'mongoose';

//Defining product schema 
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
})

export default productSchema;