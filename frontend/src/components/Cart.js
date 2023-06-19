import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent, Typography, Button } from '@mui/material';

function Cart() {
  const [cart, setCart] = useState(null);
  const userId = 'userId'; // Reemplaza esto con el ID de usuario real

  useEffect(() => {
    fetch(`http://localhost:5000/cart/${userId}`)
      .then(response => response.json())
      .then(data => setCart(data))
      .catch(err => console.error(err));
  }, [userId]);

  const handleRemove = (productId) => {
    fetch(`http://localhost:5000/cart/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId }),
    })
      .then(response => response.json())
      .then(data => setCart(data))
      .catch(err => console.error(err));
  };

  if (!cart) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Typography variant='h2'>Carrito</Typography>
      {cart.products.map((product) => (
        <Card key={product._id}>
          <CardContent>
            <Typography variant='h5'>{product.name}</Typography>
            <Typography variant='body1'>{product.description}</Typography>
            <Typography variant='body1'>{product.price}</Typography>
            <Button variant="contained" color="secondary" onClick={() => handleRemove(product._id)}>
              Eliminar del carrito
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

export default Cart;
