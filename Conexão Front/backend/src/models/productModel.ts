import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  productId: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  createAt: Date;
}

const productSchema: Schema = new Schema({
  productId: { type: Number, required: true, unique: true },
  name: { type: String, required: [true, 'O campo name é obrigatório'] },
  description: { type: String },
  price: { type: Number, required: [true, 'O campo price é obrigatório'] },
  stock: { type: Number, default: 0 },
  category: { type: String, required: [true, 'Categoria é obrigatória'] },
  createAt: { type: Date, default: Date.now }
});

const Product = mongoose.model<IProduct>('Product', productSchema, 'Products');

export default Product;