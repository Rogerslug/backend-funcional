// Importa Mongoose
const mongoose = require('mongoose');

// Define el esquema para un usuario
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
});

// Crea y exporta el modelo de usuario
module.exports = mongoose.model('User', UserSchema);
