import { Router } from "express";
import { addProduct, getAllProducts, getProductById, updateProductById, deleteProductById } from './products'
import cartController from "./cart";

const router = Router()

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products/', addProduct);
router.put('/products/:id', updateProductById);
router.delete('/products/:id', deleteProductById);

router.get('/cart', cartController);

export default router