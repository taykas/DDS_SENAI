import express from 'express';
import routes from './routes/routes.ts';
const app = express();

routes(app)

const port = 8080;

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));