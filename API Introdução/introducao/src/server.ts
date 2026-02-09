import express, { response } from 'express';
import routes from './routes/routes.ts';

const port = 8080
const app = express();

app.use(routes)

app.get('/', (req, res) => {
    res.status(200).send({response: 'api funcionando'})
})

app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`)
});

// const pessoa = {
//     name: 'Thayna',
//     lastname: 'Kaizi'
// }

// const pessoas = [
//     {
//         nome: 'teste'
//     },
//     {
//         nome: 'fulano'
//     }
// ] 

// app.get('/pessoas', (req, res) => {
//     res.send({pessoas: pessoas})
// })

// app.get('/objeto', (req, res) => {
//     res.send({pessoa: pessoa})
// })

// app.get('/', (req, res) => {
//     res.send({response: 'Api Funcionando'})
// })
