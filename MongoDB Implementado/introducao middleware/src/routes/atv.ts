import express, { Request, Response, Router } from 'express';
import Person from '../models/person.ts'

const router: Router = express.Router();

router
    .post('/registrar', async (req: Request, res: Response) => {
        const { name, lastname, age } = req.body;
        const person = new Person({name, lastname, age});

        await person.save()
        
        res.status(200).send({ message: 'Registrado com Sucesso'});
    })
    .get('/people', async (req: Request, res: Response) => {
        try {
            const people = await Person.find();
            res.status(200).json(people);
        } catch (error) {
            res.status(400).json({ message: 'Erro ao buscar pessoas', error });
        }
    });
    
export default router;