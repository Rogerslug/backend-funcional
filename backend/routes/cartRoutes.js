// Importa Express
const express = require('express');

// Crea un nuevo enrutador
const router = express.Router();

// Importa el controlador de carritos de compra
const cartController = require('../controllers/cartController');

// Define la ruta para obtener el carrito de compra de un usuario
router.get('/:userId', cartController.getCartByUserId);

// Define la ruta para agregar un producto al carrito de compra de un usuario
router.post('/', cartController.addProductToCart); 

// Define la ruta para eliminar un producto del carrito de compra de un usuario
router.delete('/:userId', cartController.removeProductFromCart);

// Exporta el enrutador
module.exports = router;
