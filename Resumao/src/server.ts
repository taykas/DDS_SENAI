import express from 'express';
import initRoutes from './routes/routes.js'
import connectDB from '../database/database.js'

const app = express();

connectDB();
initRoutes(app);

const port = 8080;

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));