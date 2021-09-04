import { Router } from "express";
import { addProduct, getAllProducts, getProductById, updateProductById, deleteProductById } from './products'
import { getAllCarts, createCart, deleteCart, addProductToCart, deleteProductFromCart, getProductsFromCart } from "./cart";

const router = Router()

router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
router.post('/products/', addProduct);
router.put('/products/:id', updateProductById);
router.delete('/products/:id', deleteProductById);

router.get('/cart', getAllCarts);
router.post('/cart', createCart);
router.delete('/cart/:id', deleteCart);
router.get('/cart/:id/products/:product_id', addProductToCart);
router.get('/cart/:id/products/', getProductsFromCart)
router.delete('/cart/:id/products/:product_id', deleteProductFromCart);
export default router