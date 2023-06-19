// Importa Express
const express = require('express');

// Crea un nuevo enrutador
const router = express.Router();

// Importa el controlador de productos
const productController = require('../controllers/productController').default;

// Define la ruta para obtener todos los productos
router.get('/', productController.getAllProducts);

// Define la ruta para obtener unproducto por su id
router.get('/:id', productController.getProductById);

// Define la ruta para crear un producto
router.post('/', productController.createProduct);

// Define la ruta para actualizar un producto
router.put('/:id', productController.updateProduct);

// Define la ruta para eliminar un producto
router.delete('/:id', productController.deleteProduct);

// Exporta el enrutador
module.exports = router;
