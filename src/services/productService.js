import ProductsRepository from "../repositories/productRepository";

const products = new ProductsRepository();

class ProductsServices {
  getAllProducts = () => {
    return products.getAllProducts();
  };

  getProductById(id) {
    return products.getProductById(id);
  }

  updateProduct(id, product) {
    const productFull = { ...product, id: Number(id) };
    return products.updateProduct(productFull);
  }

  addProduct(product) {
    return products.addProduct(product);
  }

  deleteProduct(id) {
    return products.deleteProductById(id);
  }
}

export default ProductsServices;
