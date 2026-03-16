import express from "express";
import UserController from "../controllers/PersonController.js";

const router = express.Router();

router.get("/users", UserController.getUsers);
router.post("/users", UserController.createUser);

export default router;