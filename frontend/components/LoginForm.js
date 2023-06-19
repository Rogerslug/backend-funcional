// Importa React y el hook useState
import React, { useState } from 'react';

// Define el componente LoginForm
function LoginForm() {
  // Define el estado para los valores de los campos de entrada
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Define las funciones para manejar los cambios en los campos de entrada
  const handleUsernameChange = (event) => setUsername(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  return (
    <div>
      <h1>Inicio de sesión</h1>
      <form>
        <label>
          Nombre de usuario:
          <input type="text" name="username" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" value={password} onChange={handlePasswordChange} />
        </label>
        <input type="submit" value="Iniciar sesión" />
      </form>
    </div>
  );
}

// Exporta el componente LoginForm
export default LoginForm;
