import express from "express";
import UserController from "../controllers/productController.ts";
import { authMiddleware } from "../middlewares/productMiddleware.ts";

const router = express.Router();

router.post("/createproduct", authMiddleware, UserController.createProduct);
router.get("/listproducts", UserController.getProducts);
router.get("/filterproduct/category/:category", UserController.getCategory); 
router.get("/filterproduct/Minprice/:price", UserController.getMinPrice);
router.get("/filterproduct/Maxprice/:price", UserController.getMaxPrice); 
router.get("/filterproduct/InStock", UserController.getStock);
router.get("/filterproduct/id/:productId", UserController.getProductId);
router.put("/updateproduct/:productId", UserController.putUpdateAll)
router.delete("/deleteproduct/:productId", UserController.delDeleteProduct)
router.get("/filterproduct/:name", UserController.getProductName);

export default router;