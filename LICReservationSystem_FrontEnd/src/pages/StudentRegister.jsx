import React, { useState } from 'react';
import { Box, Button, Card, CssBaseline, FormControl, FormLabel, TextField, Typography, Stack, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

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
  marginTop: theme.spacing(60), // Add marginTop to create space above the card
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

export default function StudentRegister() {
  const [formData, setFormData] = useState({
    studentId: '',
    firstName: '',
    lastName: '',
    department: '',
    course: '',
    yearLevel: '',
    birthdate: '',
    contactNumber: '',
    address: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();  // Initialize the navigate function

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
  const requiredFields = [
    'studentId',
    'firstName',
    'lastName',
    'department',
    'course',
    'yearLevel',
    'birthdate',
    'contactNumber',
    'address',
    'username',
    'email',
    'password',
    'confirmPassword',
  ];
  
  const newErrors = {};
  
  // Check required fields
  requiredFields.forEach((field) => {
    if (!formData[field]) {
      newErrors[field] = 'This field is required.';
    }
  });

  // Password validation
  const passwordRegex = /^(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!passwordRegex.test(formData.password)) {
    newErrors.password = 'Password must be at least 8 characters long and include one special character.';
  }

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
            Student Registration
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
                {/* Student ID */}
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <FormLabel htmlFor="studentId">Student ID</FormLabel>
                    <TextField
                      id="studentId"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleChange}
                      error={Boolean(errors.studentId)}
                      helperText={errors.studentId || 'Format: YYYY-XXXXX'}
                      placeholder="YYYY-XXXXX"
                      required
                    />
                  </FormControl>
                </Grid>

                {/* First Name */}
                <Grid item xs={12} md={4}>
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
                <Grid item xs={12} md={4}>
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
                <Grid item xs={12} md={4}>
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

                {/* Course */}
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <FormLabel htmlFor="course">Course</FormLabel>
                    <TextField
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      error={Boolean(errors.course)}
                      helperText={errors.course}
                      placeholder="Enter your course"
                      required
                    />
                  </FormControl>
                </Grid>

                {/* Year Level */}
                <Grid item xs={12} md={4}>
                  <FormControl fullWidth>
                    <FormLabel htmlFor="yearLevel">Year Level</FormLabel>
                    <TextField
                      id="yearLevel"
                      name="yearLevel"
                      value={formData.yearLevel}
                      onChange={handleChange}
                      error={Boolean(errors.yearLevel)}
                      helperText={errors.yearLevel}
                      placeholder="Enter your year level"
                      required
                    />
                  </FormControl>
                </Grid>

                {/* Birthdate */}
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <FormLabel htmlFor="birthdate">Birthdate</FormLabel>
                    <TextField
                      id="birthdate"
                      name="birthdate"
                      type="date"
                      value={formData.birthdate}
                      onChange={handleChange}
                      error={Boolean(errors.birthdate)}
                      helperText={errors.birthdate}
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

                {/* Address */}
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <FormLabel htmlFor="address">Address</FormLabel>
                    <TextField
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      error={Boolean(errors.address)}
                      helperText={errors.address}
                      placeholder="Enter your address"
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

            <Button 
              type="submit" 
              variant="contained" 
              fullWidth
              sx={{
                backgroundColor: 'maroon', 
                fontWeight: 'bold',
                fontSize: 15,
                color: 'gold',
                '&:hover': {
                  backgroundColor: '#800000', // Darker maroon for hover effect
                },
              }}
            >
              Register
            </Button>

            <Button
              variant="outlined"
              fullWidth
              onClick={() => navigate('/')}  // Navigate to the home page when clicked
              sx={{
                borderColor: 'maroon',
                fontWeight: 'bold',
                fontSize: 15,
                color: 'maroon',
              }}
            >
              Back to Home
            </Button>
          </Box>
        </StyledCard>
      </RegistrationContainer>
    </>
  );
}
