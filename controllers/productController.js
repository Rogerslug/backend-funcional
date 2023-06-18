// Importa el modelo de producto
const Product = require('../models/Product');

// Define los controladores para los productos
const productController = {};

//Con esta función llamamos a todos los productos usando GET en /Productos
productController.getAllProducts = async (req, res) => {
    try { 
      // Se intenta obtener todos los productos de la BD
      const products = await Product.find();
      // Se envía la respuesta si hay éxito 
      res.json(products);
    } catch (err) {
      // Si algo llega a fallar, se devuelve un error de servidor 
      res.status(500).send(err);
    }
  };

//Busca un producto usando un GET a '/products/:id'
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

//POST
productController.createProduct = async (req, res) => {
    try {
      const product = new Product(req.body);
      const savedProduct = await product.save();
      res.json(savedProduct);
    } catch (err) {
      res.status(500).send(err);
    }
  };

//PUT
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

//DELETE
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
