import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const HeaderContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#800000', // Maroon color
  color: 'white', // White text
  padding: '10px 20px', // Maintain consistent padding for the header container
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  width: '100%',
}));

const LeftSection = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  paddingLeft: '10px', // Add space on the left
}));

const RightSection = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  paddingRight: '10px', // Add space on the right
}));

const Logo = styled('img')(() => ({
  height: '50px', // Adjust the size of the logo
}));

const HeaderText = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

function Header({ name, onLogout }) {
  return (
    <HeaderContainer>
      {/* Left Section with Logo and Text */}
      <LeftSection>
        <Link to="/" style={{ textDecoration: 'none' }}> {/* Make the logo clickable */}
          <Logo src="cit-logo.png" alt="CIT University Logo" /> {/* Replace with the actual logo path */}
        </Link>
        <HeaderText>
          <Typography variant="h6" style={{ fontWeight: 'bold', lineHeight: 1 }}>
            CEBU INSTITUTE OF TECHNOLOGY UNIVERSITY
          </Typography>
          <Typography variant="body2" style={{ lineHeight: 1.5, fontSize: '15px', color: 'gold' }}>
            Student Information System
          </Typography>
          <Typography variant="body2" style={{ lineHeight: 1.5, fontSize: '15px', color: 'gold' }}>
            LIC Reservation System
          </Typography>
        </HeaderText>
      </LeftSection>

      {/* Right Section with Welcome and Logout */}
      <RightSection>
        <Typography variant="body1" style={{ marginRight: '10px' }}>
          Welcome, {name} {/* Dynamic user name */}
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={onLogout}
          style={{ backgroundColor: 'white', color: '#800000', fontWeight: 'bold' }}
        >
          Logout
        </Button>
      </RightSection>
    </HeaderContainer>
  );
}

export default Header;
