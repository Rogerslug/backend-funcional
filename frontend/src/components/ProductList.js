// Importa React y el hook useEffect
import React, { useState, useEffect } from 'react';

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
    <div>
      <h1>Lista de productos</h1>
      {products.map((product) => (
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

// Exporta el componente ProductList
export default ProductList;
