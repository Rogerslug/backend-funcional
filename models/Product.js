// Importa Mongoose
const mongoose = require('mongoose');

// Define el esquema para un producto
const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

// Crea y exporta el modelo de producto
module.exports = mongoose.model('Product', ProductSchema);