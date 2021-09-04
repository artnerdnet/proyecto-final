import CartRepository from "../repositories/cartRepository";
import ProductRepository from "../repositories/productRepository";

const carts = new CartRepository();
const products = new ProductRepository();

class CartServices {
  getAllCarts = () => {
    return carts.getAllCarts();
  };

  createCart() {
    return carts.createCart();
  }

  deleteCart(id) {
    return carts.deleteCart(id);
  };

  addProductToCart(cartId, productId) {
    const productById = products.getProductById(productId);

    if (productById === 'Product not found') {
      return productById
    }

    return carts.addProductToCart(cartId, productById);
  };

  getProductsFromCart(cartId) {
    return carts.getProductsFromCart(cartId); 
  }

  deleteProductFromCart(cartId, productId) {
    const productById = products.getProductById(productId);
    if (productById === 'Product not found') {
      return productById
    }

    return carts.deleteProductFromCart(cartId, productId);
  };
};

export default CartServices;
