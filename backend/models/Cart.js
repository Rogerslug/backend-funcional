// Importa Mongoose
const mongoose = require('mongoose');

// Define el esquema para un carrito de compra
const CartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

// Crea y exporta el modelo de carrito de compra
module.exports = mongoose.model('Cart', CartSchema);
