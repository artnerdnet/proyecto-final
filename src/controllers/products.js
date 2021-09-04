import ProductsServices from "../services/productService"

const productServices = new ProductsServices()

export const getAllProducts = (req, res) => {
    const products = productServices.getAllProducts()
    res.send(products)
}

export const getProductById = (req,res) => {
    const { id } = req.params
    const productById = productServices.getProductById(id)
    res.send(productById)
}

export const updateProductById = (req,res) => {
    const { id } = req.params
    res.send(productServices.updateProduct(id, req.body))
}

export const addProduct = (req,res) => {
    const { body } = req;
    res.send(productServices.addProduct(body))
}

export const deleteProductById = (req,res) => {
    const { id } = req.params
    const deletedProduct = productServices.deleteProduct(id)
    res.send(deletedProduct)
}
