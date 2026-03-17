import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  createAt: Date;
}

const productSchema: Schema = new Schema({
  name: { type: String, required: [true, 'O campo name é obrigatório'] },
  description: { type: String},
  price : { type: Number, required: [true, 'O campo price é obrigatório ']},
});

const Product = mongoose.model<IProduct>('Product', productSchema, 'Products');

export default Product;