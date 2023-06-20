import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart([
      { id: 1, name: 'Producto 1', price: 100 },
      { id: 2, name: 'Producto 2', price: 200 },
    ]);
  }, []);

  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter(product => product.id !== productId));
  };

  return (
    <List>
      {cart.map(product => (
        <ListItem key={product.id}>
          <ListItemText primary={product.name} secondary={`Precio: ${product.price}`} />
          <Button variant="contained" color="secondary" onClick={() => handleRemoveFromCart(product.id)}>
            Eliminar
          </Button>
        </ListItem>
      ))}
    </List>
  );
}

export default Cart;
 