// src/components/AppBar.jsx

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const navItems = ['Home', 'Reservation', 'About Us'];

function AppBarComponent() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LIC Reservation System
          </Typography>
          <Box>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                <Link to={`/${item === 'Home' ? '' : item}`} style={{ textDecoration: 'none', color: 'white' }}>
                  {item}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppBarComponent;
