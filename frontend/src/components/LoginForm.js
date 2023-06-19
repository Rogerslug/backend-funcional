import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    fetch('http://localhost:5000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Aquí deberías manejar el inicio de sesión exitoso, por ejemplo, guardando el token de autenticación y redirigiendo al usuario
        } else {
          // Aquí deberías manejar el inicio de sesión fallido, por ejemplo, mostrando un mensaje de error
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <Container>
      <Typography variant='h2'>Iniciar sesión</Typography>
      <TextField label="Nombre de usuario" variant="outlined" value={username} onChange={e => setUsername(e.target.value)} />
      <TextField label="Contraseña" variant="outlined" value={password} onChange={e => setPassword(e.target.value)} type="password" />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Iniciar sesión
      </Button>
    </Container>
  );
}

export default LoginForm;
