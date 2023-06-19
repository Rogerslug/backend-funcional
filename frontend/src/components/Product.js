// Product.js
import React, { useState } from 'react';
import { Card, CardContent, TextField, Button } from '@mui/material';

function Product({ product, onUpdate, onDelete }) {
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleUpdate = () => {
    fetch(`http://localhost:5000/products/${product._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
      .then(response => response.json())
      .then(data => onUpdate(data))
      .catch(err => console.error(err));
  };

  const handleDelete = () => {
    fetch(`http://localhost:5000/products/${product._id}`, {
      method: 'DELETE',
    })
      .then(() => onDelete(product._id))
      .catch(err => console.error(err));
  }; 

  return (
    <Card>
      <CardContent>
        <TextField label="Nombre" variant="outlined" value={updatedProduct.name} onChange={e => setUpdatedProduct(prevProduct => ({ ...prevProduct, name:e.target.value }))} />
        <TextField label="Descripción" variant="outlined" value={updatedProduct.description} onChange={e => setUpdatedProduct(prevProduct => ({ ...prevProduct, description: e.target.value }))} />
        <TextField label="Precio" variant="outlined" value={updatedProduct.price} onChange={e => setUpdatedProduct(prevProduct => ({ ...prevProduct, price: e.target.value }))} />
        <TextField label="Stock" variant="outlined" value={updatedProduct.stock} onChange={e => setUpdatedProduct(prevProduct => ({ ...prevProduct, stock: e.target.value }))} />
        <Button variant="contained" color="primary" onClick={handleUpdate}>
          Actualizar
        </Button>
        <Button variant="contained" color="secondary" onClick={handleDelete}>
          Eliminar
        </Button>
      </CardContent>
    </Card>
  );
}

export default Product;
