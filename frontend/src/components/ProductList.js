// Importa React, los hooks de React y os componentes de Material-UI
import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent, Typography } from '@mui/material';

// Define el componente ProductList
function ProductList() {
  // Define el estado para los productos
  const [products, setProducts] = useState([]);

  // Define una función para obtener los productos
  const getProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/products');
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error('Error al obtener los productos:', err);
    }
  };

  // Usa el hook useEffect para obtener los productos cuando el componente se monta
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Typography variant='h2'>Lista de productos</Typography>
      {products.map((product) => (
        <Card key={product.id}>
          <CardContent>
            <Typography variant='h5'>{product.name}</Typography>
            <Typography variant='body1'>{product.price}</Typography>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}

// Exporta el componente ProductList
export default ProductList;
