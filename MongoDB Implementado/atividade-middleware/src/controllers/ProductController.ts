import { Request, Response } from "express";

class UserController {
    static createProduct(req: Request, res: Response) {
    const { name, description, price, stock, category, createdAt } = req.body;
        res.status(201).json({ message: `Usuário ${name} criado com sucesso!` });
    }
}

export default UserController;