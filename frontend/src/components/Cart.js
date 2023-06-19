// Importa React
import React from 'react';

// Define el componente Cart
function Cart(props) {
  // El carrito de compras se recibe como propiedad
  const { cart } = props;

  return (
    <div>
      <h1>Carrito de compras</h1>
      {cart.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}

// Exporta el componente Cart
export default Cart;
