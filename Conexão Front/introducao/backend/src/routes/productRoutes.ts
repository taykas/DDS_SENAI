import express from 'express'
import ProductController from '../controllers/ProductController.js';
import { validateBodyNotEmpty, validateRequiredFields } from '../middleware/ProductMiddleware.js';

const router = express.Router();

router
  .post('/products', validateRequiredFields, ProductController.registerProduct)
  
  .get('/products', ProductController.getProducts)
  .get('/products/filter', ProductController.filter)

  .get('/products/:id', ProductController.getProductById)
  .put('/products/:id', validateBodyNotEmpty, ProductController.update)
  .delete('/products/:id', ProductController.delete)

export default router;