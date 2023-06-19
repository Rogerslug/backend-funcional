// Importa el modelo de producto
const Product = require('../models/Product');

// Define los controladores para los productos
const productController = {};

// Esta función maneja la petición GET para obtener todos los productos
productController.getAllProducts = async (res) => {
  try {
    // Intenta obtener todos los productos de la base de datos
    const products = await Product.find();
    // Si tiene éxito, envía los productos como respuesta
    res.json(products);
  } catch (err) {
    // Si algo falla, envía un error de servidor
    res.status(500).send(err);
  }
};

// Esta función maneja la petición GET para obtener un producto por su id
productController.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).send('Producto no encontrado');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Esta función maneja la petición POST para crear un producto
productController.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Esta función maneja la petición PUT para actualizar un producto
productController.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedProduct) {
      res.json(updatedProduct);
    } else {
      res.status(404).send('Producto no encontrado');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Esta función maneja la petición DELETE para eliminar un producto
productController.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndRemove(req.params.id);
    if (deletedProduct) {
      res.json(deletedProduct);
    } else {
      res.status(404).send('Producto no encontrado');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Exporta el controlador de productos
module.exports = productController;
