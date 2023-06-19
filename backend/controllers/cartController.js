// Importa los modelos de carrito de compra y producto
const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Define los controladores para los carritos de compra
const cartController = {};

// Esta función maneja la petición GET para obtener el carrito de compra de un usuario
cartController.getCartByUserId = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.params.userId }).populate('products');
    if (cart) {
      res.json(cart);
    } else {
      res.status(404).send('Carrito de compra no encontrado');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Esta función maneja la petición POST para agregar un producto al carrito de compra de un usuario
cartController.addProductToCart = async (req, res) => {
  try {
    const product = await Product.findById(req.body.productId);
    if (product) {
      const cart = await Cart.findOne({ user: req.params.userId });
      if (cart) {
        cart.products.push(product);
        const updatedCart = await cart.save();
        res.json(updatedCart);
      } else {
        const newCart = new Cart({ user: req.paramsuserId, products: [product] });
        const savedCart = await newCart.save();
        res.json(savedCart);
      }
    } else {
      res.status(404).send('Producto no encontrado');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Esta función maneja la petición DELETE para eliminar un producto del carrito de compra de un usuario
cartController.removeProductFromCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.params.userId });
    if (cart) {
      const productIndex = cart.products.indexOf(req.body.productId);
      if (productIndex > -1) {
        cart.products.splice(productIndex, 1);
        const updatedCart = await cart.save();
        res.json(updatedCart);
      } else {
        res.status(404).send('Producto no encontrado en el carrito de compra');
      }
    } else {
      res.status(404).send('Carrito de compra no encontrado');
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

// Exporta el controlador de carritos de compra
module.exports = cartController;
