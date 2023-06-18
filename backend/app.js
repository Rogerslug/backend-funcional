// Importa las bibliotecas requeridas
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');

// Conecta a MongoDB
mongoose.connect('mongodb://127.0.0.1/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Arranca una aplicación Express
const app = express();

// Middleware para interpretar cuerpos de solicitudes JSON
app.use(express.json());

// Usa las rutas del producto
app.use('/products', productRoutes);

// Define una ruta simple
app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi e-commerce de prueba!');
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('El servidor está corriendo en el puerto 3000');
});
