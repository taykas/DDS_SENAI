import express from 'express';
import connectDB from './database/database.js';

const app = express();
const port = 8080;

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));

connectDB();