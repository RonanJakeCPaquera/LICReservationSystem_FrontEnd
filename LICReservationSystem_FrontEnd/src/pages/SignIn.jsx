import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  maxWidth: '1000px', // Card size
  padding: theme.spacing(6), // Padding inside card
  gap: theme.spacing(4), // More space between elements
  margin: 'auto',
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  position: 'absolute',
  top: '50%', // Vertically center
  left: '50%', // Horizontally center
  transform: 'translate(-50%, -50%)', // Adjust for exact centering
  display: 'flex',
  justifyContent: 'center', // Center content vertically in the container
  alignItems: 'center', // Center content horizontally
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignIn() {
    const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');

  const handleSubmit = (event) => {
    if (emailError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };
  
  return (
    <>
      <CssBaseline />
      <SignInContainer direction="column" justifyContent="center">
        <Card variant="outlined">
          {/* Main Title */}
          <Typography
            component="h1"
            variant="h3"
            sx={{
              fontSize: 'clamp(2.5rem, 10vw, 3rem)',
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'maroon'
            }}
          >
            CEBU INSTITUTE OF TECHNOLOGY UNIVERSITY
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h5"
            sx={{
              textAlign: 'center',
              fontWeight: 'light',
              fontStyle: 'italic',
              marginBottom: 4,
              color: 'maroon',
            }}
          >
            LIC Reservation System
          </Typography>

          {/* Registration Type Selection */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column', // Stack the buttons vertically
              marginBottom: 3,
              gap: 2,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ 
                width: '45%',
                height: '60px',
                fontSize: '1.2rem',
                background: 'maroon',
                fontSize: 20,
                fontWeight: 'bold',
                color: 'gold',
             }}
              onClick={() => window.location.href = '/student-register'} // Redirect to admin registration page
            >
              STUDENT REGISTRATION
            </Button>
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ 
                width: '45%',
                height: '60px',
                fontSize: '1.2rem',
                background: 'maroon',
                fontSize: 20,
                fontWeight: 'bold',
                color: 'gold',
             }}
              onClick={() => window.location.href = '/admin-register'} // Redirect to admin registration page
            >
              ADMIN REGISTRATION
            </Button>
          </Box>

          <Divider sx={{ marginBottom: 3 }} />

          {/* Already have an account */}
          <Typography sx={{ textAlign: 'center' }}>
            Already have an account?{' '}
            <Link
              to="/login-page"
              style={{
                fontWeight: 'bold',
                textDecoration: 'none',
                color: 'maroon',
              }}
            >
              Login
            </Link>
          </Typography>
        </Card>
      </SignInContainer>
    </>
  );
}
