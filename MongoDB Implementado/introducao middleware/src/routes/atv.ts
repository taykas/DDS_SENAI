import express from 'express';
import AuthController from '../controller/AuthController.ts';
import { authMiddleware } from '../middleware/middleware.ts';

const route = express.Router();

route.post('/register', authMiddleware, AuthController.createUser);

export default route;