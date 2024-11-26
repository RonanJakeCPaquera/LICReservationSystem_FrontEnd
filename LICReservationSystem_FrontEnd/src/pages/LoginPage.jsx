import React from 'react';
import { Button, Card, TextField, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

// Styled components
const Logo = styled('img')(() => ({
  width: '400px',  // Increase size to make it more prominent
  height: 'auto',  // Maintain aspect ratio
  marginBottom: '0px',  // Add space below the logo
  objectFit: 'contain',  // Ensure logo is fully visible and fits the box
}));

// Main container for centering the card
const MainContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',  // Ensures it takes full viewport height
  backgroundColor: '#f4f4f4', // Light gray background (can change if needed)
  width: '100%',
  position: 'absolute',  // Use absolute positioning to center it
  top: '50%',  // Position from the top of the page
  left: '50%', // Position from the left of the page
  transform: 'translate(-50%, -50%)',  // Offset the position to center the element
}));

// Outer card to center everything
const OuterCard = styled(Card)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '30px',
  width: '100%',
  maxWidth: '400px',  // Maximum width of the card
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

// Inner card for the Account Login section with maroon border
const InnerCard = styled(Card)(() => ({
  width: '100%',
  marginTop: '16px',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',  // Adds spacing between inputs and buttons
  border: '1px solid maroon',  // Thinner maroon border for the inner card
}));

// Container for the "Account Login" section with maroon background
const AccountLoginHeader = styled(Box)(() => ({
  backgroundColor: 'maroon',  // Maroon background
  textAlign: 'center',
  padding: '12px 0',  // Padding for the header
  margin: 0,  // Remove any default margin
  borderTopLeftRadius: '4px',  // Rounded top-left corner
  borderTopRightRadius: '4px',  // Rounded top-right corner
}));

// Container for the register options (outside of the inner card)
const OutsideContainer = styled(Box)(() => ({
  marginTop: '24px',  // Adds spacing after the inner card
  textAlign: 'center',
}));

// Button container to space out the registration buttons
const ButtonContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',  // Gap between the two buttons
  width: '100%',
}));

const CustomButton = styled(Button)(() => ({
  width: '390px',  // Full width for each button
  // OR you can set a fixed width like this
  // width: '200px',
}));

function LoginPage() {
  const navigate = useNavigate();  // Declare useNavigate hook
  return (
    <MainContainer>
      <OuterCard>
        {/* Logo */}
        <Logo src="/cit-logo2.png" alt="Logo" />

        {/* LOGIN Text */}
        <Typography 
          variant="h6" 
          align="center" 
          color="textPrimary"
          sx={{
            fontWeight: 'bold',
            fontSize: '1.5rem',
            marginTop: '16px',
          }}
        >
          LOGIN
        </Typography>

        {/* Inner Card for Account Login Section */}
        <InnerCard>
          {/* Account Login header with maroon background */}
          <AccountLoginHeader>
            <Typography 
              variant="h6" 
              align="center" 
              color="white"  // White text to contrast with maroon
              sx={{
                fontWeight: 'bold',
                margin: 0,  // No margin around the header
              }}
            >
              ACCOUNT LOGIN
            </Typography>
          </AccountLoginHeader>

          <TextField label="Username" variant="outlined" fullWidth />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
          />
          <Button 
          variant="contained" 
          color="primary" 
          fullWidth
          onClick={() => navigate('/reservation')} 
          sx={{
            background: 'maroon',
            fontSize: 15,
            fontWeight: 'bold',
          }}
          >
            Login
          </Button>
          <Button 
          variant="outlined" 
          color="secondary" 
          fullWidth
          onClick={() => navigate('/')} 
          sx={{
            borderColor: 'maroon',
            fontSize: 15,
            fontWeight: 'bold',
            color: 'maroon',  
          }}
          >
            Back Home
          </Button>
        </InnerCard>

        {/* Outside Buttons */}
        <OutsideContainer>
          <Typography variant="body2" color="textSecondary">
            Don’t have an account?
          </Typography>
          <ButtonContainer>
            <CustomButton 
            variant="outlined" 
            color="primary"
            onClick={() => navigate('/student-register')} 
            sx={{
              borderColor: 'maroon',
              color: 'maroon',
              fontWeight: 'bold',
              fontSize: 15,
            }}
            >
              Register as Student
            </CustomButton>
            <CustomButton 
            variant="outlined"
            color="primary"
            onClick={() => navigate('/admin-register')} 
            sx={{
              borderColor: 'maroon',
              color: 'maroon',
              fontWeight: 'bold',
              fontSize: 15,
            }}
            >
              Register as Faculty
            </CustomButton>
          </ButtonContainer>
        </OutsideContainer>
      </OuterCard>
    </MainContainer>
  );
}

export default LoginPage;
