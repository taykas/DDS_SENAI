import express from "express";
import UserController from "../controllers/productController.ts";
import { authMiddleware } from "../middlewares/productMiddleware.ts";

const router = express.Router();

router.post("/users", authMiddleware, UserController.createUser);
router.get("/users", UserController.getUser);
router.get("/users/:name", UserController.getUserName);
router.get("/users/category/:category", UserController.getCategory); 

export default router;