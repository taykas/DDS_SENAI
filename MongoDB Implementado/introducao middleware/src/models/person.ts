import mongoose, { Schema, Document } from 'mongoose';

interface IPerson extends Document {
    name: string;
    email: string;
    password: string;
}

const personSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const Person = mongoose.model<IPerson>('Person', personSchema, "Person");

export default Person;