import React, { useState } from 'react';
import { Box, Button, Card, CssBaseline, FormControl, FormLabel, TextField, Typography, Stack, Grid, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

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
  maxWidth: '800px',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  boxShadow: theme.shadows[4],
  marginTop: theme.spacing(40),
}));

const SectionCard = styled(Card)(({ theme }) => ({
  width: '100%',
  marginBottom: theme.spacing(3),
  padding: theme.spacing(3),
  boxShadow: theme.shadows[2],
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  backgroundColor: 'maroon',
  color: 'white',
  padding: theme.spacing(1, 2),
  fontWeight: 'bold',
  borderRadius: 4,
  marginBottom: theme.spacing(2),
}));

export default function AdminRegister() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    department: '',
    contactNumber: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
    const requiredFields = ['firstName', 'lastName', 'department', 'contactNumber', 'username', 'email', 'password', 'confirmPassword'];
    const newErrors = {};
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required.';
      }
    });
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords must match.';
    }
    return newErrors;
  };

  return (
    <>
      <CssBaseline />
      <RegistrationContainer direction="column" justifyContent="center">
        <StyledCard>
          <Typography variant="h4" component="h1" gutterBottom>
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
              gap: 3,
            }}
          >
            {/* Personal Information Section */}
            <SectionCard>
              <SectionTitle variant="h6">Personal Information</SectionTitle>
              <Grid container spacing={2}>
                {/* First Name */}
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <FormLabel htmlFor="firstName">First Name</FormLabel>
                    <TextField
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      error={Boolean(errors.firstName)}
                      helperText={errors.firstName}
                      placeholder="Enter your first name"
                      required
                    />
                  </FormControl>
                </Grid>

                {/* Last Name */}
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <FormLabel htmlFor="lastName">Last Name</FormLabel>
                    <TextField
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      error={Boolean(errors.lastName)}
                      helperText={errors.lastName}
                      placeholder="Enter your last name"
                      required
                    />
                  </FormControl>
                </Grid>

                {/* Department */}
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <FormLabel htmlFor="department">Department</FormLabel>
                    <TextField
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      error={Boolean(errors.department)}
                      helperText={errors.department}
                      placeholder="Enter your department"
                      required
                    />
                  </FormControl>
                </Grid>

                {/* Contact Number */}
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <FormLabel htmlFor="contactNumber">Contact Number</FormLabel>
                    <TextField
                      id="contactNumber"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      error={Boolean(errors.contactNumber)}
                      helperText={errors.contactNumber}
                      placeholder="Enter your contact number"
                      required
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </SectionCard>

            {/* Account Information Section */}
            <SectionCard>
              <SectionTitle variant="h6">Account Information</SectionTitle>
              <Grid container spacing={2}>
                {/* Username */}
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <FormLabel htmlFor="username">Username</FormLabel>
                    <TextField
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      error={Boolean(errors.username)}
                      helperText={errors.username}
                      placeholder="Enter your username"
                      required
                    />
                  </FormControl>
                </Grid>

                {/* Email */}
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <TextField
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={Boolean(errors.email)}
                      helperText={errors.email}
                      placeholder="Enter your email"
                      required
                    />
                  </FormControl>
                </Grid>

                {/* Password */}
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
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
                      required
                    />
                  </FormControl>
                </Grid>

                {/* Confirm Password */}
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
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
                      required
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </SectionCard>

            {/* Submit Button */}
            <Button 
            variant="contained" 
            type="submit" 
            sx={{ padding: '10px 20px', backgroundColor: 'maroon', fontWeight: 'bold' }}>
              Register
            </Button>

            {/* Back to Home Button */}
            <Button
              variant="outlined"
              onClick={() => navigate('/')}
              sx={{ padding: '10px 20px', marginTop: '10px', borderColor: 'maroon', color: 'maroon', fontWeight: 'bold' }}
            >
              Back to Home
            </Button>

            {/* Login Link */}
            <Typography variant="body2" sx={{ textAlign: 'center', marginTop: 2 }}>
              Already have an account?{' '}
              <Link
                href="/login-page"
                underline="hover"
                sx={{ fontWeight: 'bold', color: 'maroon' }}
              >
                Login here
              </Link>
            </Typography>
          </Box>
        </StyledCard>
      </RegistrationContainer>
    </>
  );
}
