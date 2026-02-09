import express, { response } from 'express'
import { lstatSync } from 'node:fs';

const port = 8080
const app = express();

const pessoa = {
    name: 'Thayna',
    lastname: 'Kaizi'
}

const pessoas = [
    {
        nome: 'teste'
    },
    {
        nome: 'fulano'
    }
] 

app.get('/pessoas', (req, res) => {
    res.send({pessoas: pessoas})
})

app.get('/objeto', (req, res) => {
    res.send({pessoa: pessoa})
})

app.get('/', (req, res) => {
    res.send({response: 'Api Funcionando'})
})

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
});