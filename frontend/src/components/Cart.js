// Importa React, los hooks de React y los componentes de Material-UI
import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent, Typography, Button } from '@mui/material';

// Define el componente Cart
function Cart() {
  // Define el estado para el carrito
  const [cart, setCart] = useState([]);

  // Define una función para obtener el carrito
  const getCart = async () => {
    try {
      const response = await fetch('http://localhost:3000/cart');
      const data = await response.json();
      setCart(data);
    } catch (err) {
      console.error('Error al obtener el carrito:', err);
    }
  };

  // Usa el hook useEffect para obtener el carrito cuando el componente se monta
  useEffect(() => {
    getCart();
  }, []);

  return (
    <Container>
      <Typography variant="h2">Mi carrito</Typography>
      {cart.map((item) => (
        <Card key={item._id}>
          <CardContent>
            <Typography variant="h5">{item.name}</Typography>
            <Typography variant="body1">{item.price}</Typography>
            <Button variant="contained" color="primary">
              Eliminar del carrito
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

// Exporta el componente Cart
export default Cart;
