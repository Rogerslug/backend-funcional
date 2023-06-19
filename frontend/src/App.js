// Importa React y los componentes
import React from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import LoginForm from './LoginForm';

// Define el componente App
function App() {
  return (
    <div>
      <ProductList />
      <Cart />
      <LoginForm />
    </div>
  );
}

// Exporta el componente App
export default App;


/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */