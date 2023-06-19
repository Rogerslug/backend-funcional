// ProductForm.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function ProductForm({ onCreate }) {
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', stock: '' });

  const handleCreate = () => {
    fetch('http://localhost:5000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then(response => response.json())
      .then(data => onCreate(data))
      .catch(err => console.error(err));
  };

  return (
    <>
      <TextField label="Nombre" variant="outlined" value={newProduct.name} onChange={e => setNewProduct(prevProduct => ({ ...prevProduct, name: e.target.value }))} />
      <TextField label="Descripción" variant="outlined" value={newProduct.description} onChange={e => setNewProduct(prevProduct => ({ ...prevProduct, description: e.target.value }))} />
      <TextField label="Precio" variant="outlined" value={newProduct.price} onChange={e => setNewProduct(prevProduct => ({ ...prevProduct, price: e.target.value }))} />
      <TextField label="Stock" variant="outlined" value={newProduct.stock} onChange={e => setNewProduct(prevProduct => ({ ...prevProduct, stock: e.target.value }))} />
      <Button variant="contained" color="primary" onClick={handleCreate}>
        Crear
      </Button>
    </>
  );
}

export default ProductForm;
