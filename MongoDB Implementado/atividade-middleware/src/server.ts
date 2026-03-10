import express from 'express';
import routes from './routes/routes.js';
import connectDB from './database/database.js';

const app = express();
const port = 8080;

connectDB();
routes(app)

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));