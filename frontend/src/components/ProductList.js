import React, { useState, useEffect } from 'react';
import { Container, Typography, CircularProgress } from '@mui/material';
import Product from './Product';
import ProductForm from './ProductForm';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los productos');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  const handleCreate = (product) => {
    setProducts(prevProducts => [...prevProducts, product]);
  };

  const handleUpdate = (updatedProduct) => {
    setProducts(prevProducts => prevProducts.map(product => product._id === updatedProduct._id ? updatedProduct : product));
  };

  const handleDelete = (productId) => {
    setProducts(prevProducts => prevProducts.filter(product => product._id !== productId));
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container>
      <Typography variant='h2'>Lista de productos</Typography>
      {products.map((product) => (
        <Product key={product._id} product={product} onUpdate={handleUpdate} onDelete={handleDelete} />
      ))}
      <Typography variant='h4'>Crear producto</Typography>
      <ProductForm onCreate={handleCreate} />
    </Container>
  );
}

export default ProductList;
