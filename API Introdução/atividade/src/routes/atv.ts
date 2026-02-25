import express, { Request, Response, Router } from 'express';

interface Usuario {
    id: string;
    nome: string;
    email: string;
    tipo: string;
    dataRegistro: string;
    ativo: boolean;
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

const validarPatch = (req: Request, res: Response, next: Function) => {
    const { id, email, tipo } = req.body; 

    // Verifica se o email já existe (ignora maiúsculas/minúsculas)
    if(email) {
        const emailExistente = atv.find(u => u.email.toLowerCase() === email.toLowerCase());
        if (emailExistente) {
            return res.status(400).send({ message: 'Usuário já cadastrado! Email repetido' });
        }
    }   

    if(tipo) {
        const tiposValidos = ["aluno", "professor", "coordenador"];
        if (!tiposValidos.includes(tipo)) {
            return res.status(400).send({ message: `Tipo ${tipo} não válido!` });
        }
    }

    if(id) {
        return res.status(400).send({message: 'Mudança de ID não autorizada'});
    }

    next();
};


router
    .post('/registrar', validarCampos, (req: Request, res: Response) => {
        const { id, nome, email, tipo } = req.body;
        
        const dataRegistro = new Date().toISOString();
        const ativo = true;

        atv.push({ id, nome, email, tipo, dataRegistro, ativo });
        res.status(200).send({ message: `Usuário ${id} ${nome} ${email} cadastrado com sucesso`, dataRegistro, ativo });
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
        const usuarioTipo = atv.filter(u => u.tipo === tipo);
        
        res.status(200).send({ usuarioTipo })
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
        const { idBody, nome, email, tipo} = req.body;

        const usuarioEditar = atv.find(u => u.id === id);

        if(!usuarioEditar) {
            return res.status(404).send({message: `Usuario não encontrado`})
        }
        
        if (nome) usuarioEditar.nome = nome;
        if (email) usuarioEditar.email = email;
        if (tipo) usuarioEditar.tipo = tipo;

        res.status(200).send({ message: `Usuario Editado com sucesso` });
    })
    .patch('/editarPatch/:id', validarPatch, (req: Request, res: Response) => {
        const {id} = req.params;
        const dados = req.body;

        const usuarioEditar = atv.find(u => u.id === id);

        if(!usuarioEditar){
            return res.status(404).send({message: 'Usuario não encontrado'})
        }

        if(dados.nome) usuarioEditar.nome = dados.nome;
        if(dados.email) usuarioEditar.email = dados.email;
        if(dados.tipo) usuarioEditar.tipo = dados.tipo;

        res.status(200).send({ message: `Usuario Editado com sucesso ${usuarioEditar}` });
    })
    .delete('deletar/:id', (req: Request, res: Response) => {
        const {id} = req.params;
        // const convertedId = Number(id)
        const usuarioExcluir = atv.findIndex(u => u.id === id);

        if(!usuarioExcluir){
            return res.status(404).send({message: 'Usuario não encontrado'})
        }

        atv.splice(usuarioExcluir, 1)

        res.status(200).send({ message: `Usuario Deletado com sucesso` });
    })

export default router;