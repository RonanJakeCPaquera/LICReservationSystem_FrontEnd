// src/components/Reservation.jsx

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ReservationPage() {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        Reservation Page
      </Typography>
      <Typography>
        Welcome to the reservation page! You can book your reservation here.
      </Typography>
    </Box>
  );
}

export default ReservationPage;
