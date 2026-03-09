import mongoose, { Schema, Document } from 'mongoose';
import { create } from 'node:domain';

interface IProduct extends Document {
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    createdAt: string;
}

const productSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    category: { type: String, required: true },
    createdAt: { type: String, required: true }
});

const Product = mongoose.model<IProduct>('Product', productSchema, "Product");

export default Product;