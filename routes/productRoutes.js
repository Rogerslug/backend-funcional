// Importa Express
const express = require('express');

// Crea un nuevo enrutador
const router = express.Router();

// Importa el controlador de productos
const productController = require('../controllers/productController');

// Define las rutas para los productos
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

// Exporta el enrutador
module.exports = router;
