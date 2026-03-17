import { Request, Response } from "express";
import Product from "../models/productModel.ts";

class UserController {
    static async createUser(req: Request, res: Response) {
    const { name, description, price, stock, category } = req.body;
        await Product.create({name, description, price, stock, category })
        res.status(201).send({ message: `Usuário ${name} ${description}, ${price}, ${stock}, ${category} criado com sucesso!` });
    }
    static async getUser(req: Request, res: Response) {
        const user = await Product.find()
        res.status(201).json({ message: user });
    }
    static async getUserName(req: Request, res: Response) {
        const { name } = req.query;

        if (typeof name !== "string") {
            return res.status(400).json({ message: "Nome inválido" });
        }

        const user = await Product.find({
            name: { $regex: name, $options: "i" }
        });

        res.status(200).json({ message: user });
    }
    static async getCategory(req: Request, res: Response) {
        const { category } = req.params;

        if (typeof category !== "string") {
            return res.status(400).json({ message: "Categoria inválida" });
        }

        const user = await Product.find({
            category: category
        }); 

        res.status(200).json({ message: user });
    }
    
}

export default UserController;