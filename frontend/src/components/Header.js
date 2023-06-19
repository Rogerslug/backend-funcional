import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Mi E-commerce
        </Typography>
        <Button color="inherit" component={Link} to="/products">Productos</Button>
        <Button color="inherit" component={Link} to="/cart">Carrito</Button>
        <Button color="inherit" component={Link} to="/login">Iniciar Sesión</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
