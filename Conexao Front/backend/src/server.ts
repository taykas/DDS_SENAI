import express from 'express';
import connectDB from './database/database.js';
import cors from cors;

const app = express();
const port = 8080;

app.use(cors({
    origin: '*'
}));

routes(app);

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));

connectDB();