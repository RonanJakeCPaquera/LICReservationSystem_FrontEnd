import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import CustomAppBar from './components/AppBar';
import Reservation from './components/Reservation';
import SignIn from './pages/SignIn';
import StudentRegister from './pages/StudentRegister'; // Import StudentRegister
import AdminRegister from './pages/AdminRegister';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Box>
        <Routes>
          {/* Default route ("/") points to SignIn */}
          <Route path="/" element={<SignIn />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/student-register" element={<StudentRegister />} /> {/* StudentRegister route */}
          <Route path="/admin-register" element={<AdminRegister />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route patj="/reservation" element={<Reservation />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
