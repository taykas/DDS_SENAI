import express, { Request, Response, Router } from 'express';

interface Usuario {
    id: string;
    nome: string;
    email: string;
    tipo: string;
    dataRegistro: string;
}

const router: Router = express.Router();
const atv: Usuario[] = [];

// Middleware de validação CADASTRO
const validarCampos = (req: Request, res: Response, next: Function) => {
    const { id, nome, email, tipo } = req.body; 

    if (!nome || !email) {
        return res.status(400).send({ message: 'Preencha todos os campos!' });
    }

    // Verifica se o ID já existe
    const userExistente = atv.find(u => String(u.id) === String(id));
    if (userExistente) {
        return res.status(400).send({ message: 'Usuário já cadastrado! ID repetido' });
    }

    // Verifica se o email já existe (ignora maiúsculas/minúsculas)
    const emailExistente = atv.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (emailExistente) {
        return res.status(400).send({ message: 'Usuário já cadastrado! Email repetido' });
    }

    // Validação do tipo
    const tiposValidos = ["aluno", "professor", "coordenador"];
    if (!tiposValidos.includes(tipo)) {
        return res.status(400).send({ message: `Tipo ${tipo} não válido!` });
    }

    next();
};


router
    .post('/registrar', validarCampos, (req: Request, res: Response) => {
        const { id, nome, email, tipo } = req.body;
        
        const dataRegistro = new Date().toISOString();

        atv.push({ id, nome, email, tipo, dataRegistro });
        res.status(200).send({ message: `Usuário ${id} ${nome} ${email} cadastrado com sucesso`, dataRegistro });
    })
   .get('/usuarios', (req: Request, res:Response) => {
        res.status(200).send({ usuario: atv })
    })
    .get('/usuarios/id/:id', (req: Request, res:Response) => {
        const { id } = req.params;
        const usuarioId = atv.find(u => u.id === id);

        if (!usuarioId) {
            return res.status(404).send({ message: `Usuário não encontrado` });
        }
        
        res.status(200).send({ usuarioId })
    })
    .get('/usuarios/tipo/:tipo', (req: Request, res:Response) => {
        const { tipo } = req.params;
        const usuarioTipo = atv.find(u => u.tipo === tipo);
        
        res.status(200).send({ usuarios: usuarioTipo })
    })
    .get('/usuarios/nome/:nome', (req: Request, res: Response) => {
        const { nome } = req.params;
        const usuario = atv .find(u => u.nome === nome);

        if (!usuario) {
            return res.status(404).send({ message: `Usuário ${nome} não encontrado` });
        }

        res.status(200).send({ usuario });
    })
    .put('/editar/:id', validarCampos, (req: Request, res: Response) => {
        const {id} = req.params;
        const {nome, email, tipo} = req.body;

        const usuarioEditar = atv.find(u => u.id === id);

        if(!usuarioEditar) {
            return res.status(404).send({message: `Usuario não encontrado`})
        }

        if (nome) usuarioEditar.nome = nome;
        if (email) usuarioEditar.email = email;
        if (tipo) usuarioEditar.tipo = tipo;

        res.status(200).send({ message: `Usuario Editado com sucesso ${usuarioEditar}` });
    })

export default router;