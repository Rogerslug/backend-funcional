import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

function LoginForm() {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleRegister = () => {
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
  };

  const handleLogin = () => {
    fetch('http://localhost:5000/users')
      .then(response => response.json())
      .then(data => {
        const foundUser = data.find(u => u.username === user.username && u.password === user.password);
        if (foundUser) {
          console.log('Inicio de sesión exitoso');
        } else {
          console.log('Usuario o contraseña incorrectos');
        }
      })
      .catch(err => console.error(err));
  };

  const handleDelete = () => {
    fetch(`http://localhost:5000/users/${user._id}`, {
      method: 'DELETE',
    })
      .then(() => console.log('Usuario eliminado'))
      .catch(err => console.error(err));
  };

  return (
    <Container>
      <Typography variant='h4'>Iniciar sesión / Registrarse</Typography>
      <TextField name="username" label="Nombre de usuario" variant="outlined" value={user.username} onChange={handleInputChange} />
      <TextField name="password" label="Contraseña" variant="outlined" value={user.password} onChange={handleInputChange} type='password'/>
    {/* <TextField label="Contraseña" variant="outlined" value={password} onChange={e => setPassword(e.target.value)} type="password" />
 */}      <Button variant="contained" color="primary" onClick={handleLogin}>
        Iniciar sesión
      </Button>
      <Button variant="contained" color="primary" onClick={handleRegister}>
        Registrarse
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        Eliminar cuenta
      </Button>
    </Container>
  );
}

export default LoginForm;
