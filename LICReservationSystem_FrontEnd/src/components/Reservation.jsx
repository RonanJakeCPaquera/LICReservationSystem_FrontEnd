import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  Typography, 
  TextField, 
  Button, 
  Table, 
  TableHead, 
  TableRow, 
  TableCell, 
  TableBody, 
  MenuItem, 
  Select, 
  InputLabel, 
  FormControl 
} from '@mui/material';
import { styled, createGlobalStyle } from 'styled-components';
import Header from './Header'; // Import your Header component

// Global CSS Reset
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    overflow-x: hidden; /* Prevent horizontal scroll on body */
  }
`;

// Styled components
const PageContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minHeight: '100vh',
  width: '100vw',
  backgroundColor: '#f2dbb2',
  overflowX: 'hidden', // Prevent horizontal scroll
  margin: 0,
  paddingBottom: 20,
}));

const ContentWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  justifyContent: 'space-between',
}));

const ProfileCard = styled(Card)(() => ({
  width: '45%',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginTop: '20px',
  borderRadius: '12px !important', // Ensure borderRadius is applied
  backgroundColor: '#ffffff', // Ensure a contrasting card color
  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)', // Visible shadow for standby
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.25)', // Stronger shadow on hover
  },
}));

const AboutCard = styled(Card)(() => ({
  width: '45%',
  padding: '20px',
  marginTop: '20px',
  borderRadius: '12px !important',
  backgroundColor: '#ffffff', // Ensure a contrasting card color
  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.25)',
  },
}));

const ReservationFormCard = styled(Card)(() => ({
  marginTop: '20px',
  padding: '20px',
  width: '40%',
  borderRadius: '12px !important',
  backgroundColor: '#ffffff',
  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.25)',
  },
}));

const ReservationDetailsCard = styled(Card)(() => ({
  marginTop: '20px',
  padding: '20px',
  width: '90%',
  maxWidth: '1200px',
  overflowX: 'auto',
  borderRadius: '12px !important',
  backgroundColor: '#ffffff',
  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.25)',
  },
}));


const ReservationTable = styled(Table)(() => ({
  minWidth: '100%',
}));

// Profile Component
function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [contactNumber, setContactNumber] = useState('09123456789');
  const [address, setAddress] = useState('1234 Elm Street');

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
    console.log('Changes saved:', { contactNumber, address });
  };

  return (
    <ProfileCard>
      <Typography variant="h6" fontWeight="bold">{isEditing ? 'EDIT PROFILE' : 'Student Profile'}</Typography>
      {isEditing ? (
        <>
          <TextField
            label="Contact Number"
            value={contactNumber}
            fullWidth
            onChange={(e) => setContactNumber(e.target.value)}
          />
          <TextField
            label="Address"
            value={address}
            fullWidth
            onChange={(e) => setAddress(e.target.value)}
          />
          <Box display="flex" justifyContent="space-between" gap="10px">
            <Button variant="contained" color="primary" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </Box>
        </>
      ) : (
        <>
          <TextField label="Student ID" value="123456" fullWidth disabled />
          <TextField label="Name" value="John Doe" fullWidth disabled />
          <TextField label="Course" value="BS Computer Science" fullWidth disabled />
          <TextField label="Year Level" value="3rd Year" fullWidth disabled />
          <TextField label="Contact Number" value={contactNumber} fullWidth disabled />
          <TextField label="Address" value={address} fullWidth disabled />
          <Box display="flex" justifyContent="space-between" gap="10px">
            <Button variant="outlined" color="primary" onClick={handleEditProfile}>
              Edit Profile
            </Button>
          </Box>
        </>
      )}
    </ProfileCard>
  );
}

// Reservation Component
function Reservation() {
  const [reservationData, setReservationData] = useState([
    {
      resource: 'Library Room A',
      name: 'John Doe',
      date: '2024-11-25',
      timeIn: '10:00 AM',
      timeOut: '12:00 PM',
      paymentStatus: 'Paid',
      status: 'Confirmed',
      penalty: 'None',
    },
  ]);

  const [newReservation, setNewReservation] = useState({
    resource: '',
    name: 'John Doe',  // Automatically input the name of the user
    date: '',
    timeIn: '',
    timeOut: '',
    paymentStatus: 'Unpaid',
    status: 'Pending',
    penalty: 'None',
  });

  const handleMakeReservation = () => {
    if (
      !newReservation.resource ||
      !newReservation.name ||
      !newReservation.date ||
      !newReservation.timeIn ||
      !newReservation.timeOut
    ) {
      alert('Please fill out all fields.');
      return;
    }

    setReservationData([...reservationData, newReservation]);
    setNewReservation({
      resource: '',
      name: 'John Doe',  // Automatically input the name of the user
      date: '',
      timeIn: '',
      timeOut: '',
      paymentStatus: 'Unpaid',
      status: 'Pending',
      penalty: 'None',
    });
  };

  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Header />
        <ContentWrapper>
          <Profile />
          <AboutCard>
            <Typography variant="h6" fontWeight="bold">About the Page</Typography>
            <Typography>
              Welcome to the Student Dashboard! Here, you can manage your profile and
              view your reservations. Ensure that all your details are updated for
              accurate communication and service.
            </Typography>
          </AboutCard>
        </ContentWrapper>

        <ReservationFormCard>
          <Typography variant="h6" fontWeight="bold" marginBottom="10px">Make a New Reservation</Typography>

          {/* Name Field */}
          <TextField
            label="Name"
            value={newReservation.name}
            onChange={(e) => setNewReservation({ ...newReservation, name: e.target.value })}
            fullWidth
          />

          {/* Resource Dropdown */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Resource</InputLabel>
            <Select
              value={newReservation.resource}
              onChange={(e) => setNewReservation({ ...newReservation, resource: e.target.value })}
            >
              <MenuItem value="COM LAB">COM LAB</MenuItem>
              <MenuItem value="DRIVING SIMULATOR">DRIVING SIMULATOR</MenuItem>
              <MenuItem value="DISCUSSION ROOM">DISCUSSION ROOM</MenuItem>
            </Select>
          </FormControl>

          {/* Date Field */}
          <TextField
            label="Date"
            type="date"
            value={newReservation.date}
            onChange={(e) => setNewReservation({ ...newReservation, date: e.target.value })}
            fullWidth
          />
          <TextField
            label="Time In"
            type="time"
            value={newReservation.timeIn}
            onChange={(e) => setNewReservation({ ...newReservation, timeIn: e.target.value })}
            fullWidth
          />
          <TextField
            label="Time Out"
            type="time"
            value={newReservation.timeOut}
            onChange={(e) => setNewReservation({ ...newReservation, timeOut: e.target.value })}
            fullWidth
          />
          <Button variant="contained" color="primary" onClick={handleMakeReservation}>
            Submit Reservation
          </Button>
        </ReservationFormCard>

        <ReservationDetailsCard>
          <Typography variant="h6" fontWeight="bold" marginBottom="10px">Reservation Details</Typography>
          <ReservationTable>
            <TableHead>
              <TableRow>
                <TableCell>RESOURCE</TableCell>
                <TableCell>NAME</TableCell>
                <TableCell>DATE</TableCell>
                <TableCell>TIME IN</TableCell>
                <TableCell>TIME OUT</TableCell>
                <TableCell>PAYMENT STATUS</TableCell>
                <TableCell>CANCEL</TableCell>
                <TableCell>STATUS</TableCell>
                <TableCell>PENALTY</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reservationData.map((reservation, index) => (
                <TableRow key={index}>
                  <TableCell>{reservation.resource}</TableCell>
                  <TableCell>{reservation.name}</TableCell>
                  <TableCell>{reservation.date}</TableCell>
                  <TableCell>{reservation.timeIn}</TableCell>
                  <TableCell>{reservation.timeOut}</TableCell>
                  <TableCell>{reservation.paymentStatus}</TableCell>
                  <TableCell>{reservation.status}</TableCell>
                  <TableCell>{reservation.penalty}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </ReservationTable>
        </ReservationDetailsCard>
      </PageContainer>
    </>
  );
}

export default Reservation;
