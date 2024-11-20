// src/App.jsx
//test Commit
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import CustomAppBar from './components/AppBar';
import Reservation from './components/Reservation'; // Import the Reservation component

function App() {
  return (
    <Router>
      <Box>
        <CustomAppBar />
        <Routes>
          <Route path="/reservation" element={<Reservation />} />
          {/* Add other routes here */}
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
