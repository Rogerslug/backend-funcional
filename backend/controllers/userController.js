// Importa el modelo de usuario
const User = require('../models/User');

// Define los controladores para los usuarios
const userController = {};

// Esta función maneja la petición GET para obtener todos los usuarios
userController.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Esta función maneja la petición GET para obtener un usuario por su id
userController.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('Usuario no encontrado');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Esta función maneja la petición POST para crear un usuario
userController.createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Esta función maneja la petición PUT para actualizar un usuario
userController.updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).send('Usuario no encontrado');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Esta función maneja la petición DELETE para eliminar un usuario
userController.deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndRemove(req.params.id);
    if (deletedUser) {
      res.json(deletedUser);
    } else {
      res.status(404).send('Usuario no encontrado');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Exporta el controlador de usuarios
module.exports = userController;
