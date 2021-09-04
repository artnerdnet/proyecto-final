import { write, read, findById, generateId } from "../utils/helpers";

class ProductsRepository {
  getAllProducts = () => {
    return read("./src/products.json");
  };

  getProductById = (id) => {
    const products = this.getAllProducts();
    const productFound = findById(products, id)
    if (!productFound) {
      return "Product not found";
    }

      return productFound;
  };

  addProduct = (newProduct) => {
    const products = this.getAllProducts();
    const newId = generateId(products);
    const updatedProducts = [...products, { ...newProduct, id: newId }];
    write("./src/products.json", updatedProducts);
    return updatedProducts;
  };

  updateProduct = (productToUpdate) => {
    const products = this.getAllProducts();

    if (!findById(products, productToUpdate.id)) {
      return "Product not found";
    }

    const updatedProducts = products.map((product) =>
      product.id === productToUpdate.id ? productToUpdate : product
    );

    write("./src/products.json", updatedProducts);
    return updatedProducts;
  };

  deleteProductById = (id) => {
    const products = this.getAllProducts();
    const productFound = findById(products, id);
    if (!productFound) {
      return 'Product not found'
    }
    const updatedProducts = products.filter((product) => product.id != id);
    write("./src/products.json", updatedProducts);
    return updatedProducts;
  };
}

export default ProductsRepository;
