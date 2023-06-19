// Importa Express
const express = require('express');

// Crea un nuevo enrutador
const router = express.Router();

// Importa el controlador de usuarios
const userController = require('../controllers/userController');

// Define la ruta para obtener todos los usuarios
router.get('/', userController.getAllUsers);

// Define la ruta para obtener un usuario por su id
router.get('/:id', userController.getUserById);

// Define la ruta para crear un usuario
router.post('/', userController.createUser);

// Define la ruta para actualizar un usuario
router.put('/:id', userController.updateUser);

// Define la ruta para eliminar un usuario
router.delete('/:id', userController.deleteUser);

// Exporta el enrutador
module.exports = router;
