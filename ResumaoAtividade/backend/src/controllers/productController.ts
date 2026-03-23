import { Request, Response } from "express";
import Product from "../models/productModel.ts";

class UserController {
    static async createProduct(req: Request, res: Response) {
    const { productId, name, description, price, stock, category } = req.body;
        try {
            await Product.create({ productId,name, description, price, stock, category })
            res.status(201).send({ message: `Produto ${productId} ${name} ${description}, ${price}, ${stock}, ${category} criado com sucesso!` });   
        } catch(error) {
            return res.status(500).json({ message: "Server error", error });
        }
    }
    static async getProducts(req: Request, res: Response) {
        try{
            const user = await Product.find()
            res.status(201).json({ message: user });
        } catch (error) {
            return res.status(500).json({ message: "Server error", error });
        }
    }
    static async getProductName(req: Request, res: Response) {
        try {
            const { name } = req.params;
    
            if (!name) {
                return res.status(400).json({ message: "Nome não informado" });
            }
    
            const products = await Product.find({
                name: { $regex: name, $options: "i" }
            });
    
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor", error });
        }
    }
    static async getCategory(req: Request, res: Response) {
        try {
            const { category } = req.params;
    
            if (!category) {
                return res.status(400).json({ message: "Categoria inválida" });
            }
    
            const products = await Product.find({
                category: { $regex: category, $options: "i" }
            });
    
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor", error });
        }
    }
    static async getMinPrice(req: Request, res: Response) {
        try {
            const { price } = req.params;
            const numericPrice = Number(price);
    
            if (isNaN(numericPrice)) {
                return res.status(400).json({ message: "Preço inválido" });
            }
    
            const products = await Product.find({
                price: { $lte: numericPrice }
            });
    
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor", error });
        }
    }
    static async getMaxPrice(req: Request, res: Response) {
        try {
            const { price } = req.params;
    
            const numericPrice = Number(price);
    
            if (isNaN(numericPrice)) {
                return res.status(400).json({ message: "Preço inválido" });
            }
    
            const products = await Product.find({
                price: { $gte: numericPrice }
            });
    
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor", error });
        }
    }
    static async getStock(req: Request, res: Response) {
        try {
            const products = await Product.find({
                stock: { $gt: 0 }
            });
    
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: "Erro no servidor", error });
        }
    }
    static async getProductId(req: Request, res: Response) {
        try {
            const { productId } = req.params;
            const numericId = Number(productId);

            const products = await Product.find({ productId: numericId})

            res.status(200).json(products);
        } catch (error) {
            res.status(404).json({ message: "Produto nao encontrado", error });
        }
    }
    static async putUpdateAll(req: Request, res: Response) {
        try {
            const { productId } = req.params;
            const numericId = Number(productId);

            const { name, description, price, stock, category } = req.body

            const updateProduct = await Product.findOneAndUpdate(
                { productId: numericId },
                { name, description, price, stock, category },
                { new: true, runValidators: true }
            );

            res.status(200).json(updateProduct);
        } catch (error) {
            res.status(404).json({ message: "Produto nao encontrado", error });
        }
    }
    static async delDeleteProduct(req: Request, res: Response) {
        try {
            const { productId } = req.params;
            const numericId = Number(productId);

            const deleteProduct = await Product.findOneAndDelete({productId: numericId});

            res.status(200).json(deleteProduct);
        } catch (error) {
            res.status(404).json({ message: "Produto nao encontrado", error });
        }
    }
}

export default UserController;