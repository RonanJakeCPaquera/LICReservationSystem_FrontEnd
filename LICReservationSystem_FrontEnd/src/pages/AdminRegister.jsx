// src/pages/AdminRegister.jsx
import React, { useState } from 'react';
import { Box, Button, Card, CssBaseline, FormControl, FormLabel, TextField, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const RegistrationContainer = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '600px',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow: theme.shadows[4],
}));

export default function AdminRegister() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = validateForm();
    if (Object.values(newErrors).every((err) => err === '')) {
      console.log('Form Data Submitted:', formData);
      // Add form submission logic here
    } else {
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {
      username: formData.username ? '' : 'Username is required.',
      email: formData.email && /\S+@\S+\.\S+/.test(formData.email) ? '' : 'Valid email is required.',
      password: formData.password ? '' : 'Password is required.',
      confirmPassword:
        formData.confirmPassword === formData.password ? '' : 'Passwords must match.',
    };
    return newErrors;
  };

  return (
    <>
      <CssBaseline />
      <RegistrationContainer direction="column" justifyContent="center">
        <StyledCard>
          <Typography variant="h4" component="h1">
            Admin Registration
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            {/* Username */}
            <FormControl>
              <FormLabel htmlFor="username">Username</FormLabel>
              <TextField
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                error={Boolean(errors.username)}
                helperText={errors.username}
                placeholder="Enter your username"
                variant="outlined"
                required
              />
            </FormControl>

            {/* Email Address */}
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <TextField
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={Boolean(errors.email)}
                helperText={errors.email}
                placeholder="Enter your email address"
                variant="outlined"
                required
              />
            </FormControl>

            {/* Password */}
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                error={Boolean(errors.password)}
                helperText={errors.password}
                placeholder="Enter your password"
                variant="outlined"
                required
              />
            </FormControl>

            {/* Confirm Password */}
            <FormControl>
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <TextField
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={Boolean(errors.confirmPassword)}
                helperText={errors.confirmPassword}
                placeholder="Confirm your password"
                variant="outlined"
                required
              />
            </FormControl>

            {/* Buttons */}
            <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ padding: '0.8rem 1.5rem', fontSize: '1rem' }}
              >
                Register as an Admin
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                href="/"
                sx={{ padding: '0.8rem 1.5rem', fontSize: '1rem' }}
              >
                Back Home
              </Button>
            </Stack>
          </Box>
        </StyledCard>
      </RegistrationContainer>
    </>
  );
}
