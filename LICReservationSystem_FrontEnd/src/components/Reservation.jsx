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
  TableBody 
} from '@mui/material';
import { styled } from '@mui/system';
import Header from './Header'; // Import your Header component

// Styled components
const PageContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // Removed justifyContent: 'center' to avoid pushing content
  minHeight: '100vh', // Full height
  width: '100vw', // Full width
  backgroundColor: '#f4f4f4', // Light gray background
  overflowX: 'hidden', // Prevent horizontal scrolling if content overflows
  margin: 0,
  paddingBottom: '20px'
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
}));

const AboutCard = styled(Card)(() => ({
  width: '45%',
  padding: '20px',
  marginTop: '20px',
}));

const ReservationFormCard = styled(Card)(() => ({
  marginTop: '20px',
  padding: '20px',
  width: '40%', // Make the card span full width
}));

const ReservationDetailsCard = styled(Card)(() => ({
  marginTop: '20px',
  padding: '20px',
  width: '90%',
}));

const ReservationTable = styled(Table)(() => ({
  minWidth: '100%',
}));

// Profile Component
function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [contactNumber, setContactNumber] = useState('09123456789');
  const [address, setAddress] = useState('1234 Elm Street');

  // Toggle edit mode
  const handleEditProfile = () => {
    setIsEditing(true);
  };

  // Save changes (update values and exit edit mode)
  const handleSaveChanges = () => {
    setIsEditing(false);
    console.log('Changes saved:', { contactNumber, address });
  };

  return (
    <ProfileCard>
      <Typography variant="h6" fontWeight="bold">{isEditing ? 'EDIT PROFILE' : 'Student Profile'}</Typography>

      {/* Editable fields for contact number and address */}
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
  // State for reservation data and form
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
    name: '',
    date: '',
    timeIn: '',
    timeOut: '',
    paymentStatus: 'Unpaid',
    status: 'Pending',
    penalty: 'None',
  });

  // Function to handle adding a new reservation
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
      name: '',
      date: '',
      timeIn: '',
      timeOut: '',
      paymentStatus: 'Unpaid',
      status: 'Pending',
      penalty: 'None',
    });
  };

  return (
    <PageContainer>
      {/* Include Header Component */}
      <Header />
      {/* Content Wrapper */}
      <ContentWrapper>
        {/* Profile Card */}
        <Profile />

        {/* About Card */}
        <AboutCard>
          <Typography variant="h6" fontWeight="bold">About the Page</Typography>
          <Typography>
            Welcome to the Student Dashboard! Here, you can manage your profile and
            view your reservations. Ensure that all your details are updated for
            accurate communication and service.
          </Typography>
        </AboutCard>
      </ContentWrapper>

      {/* Reservation Section */}
      <ReservationFormCard>
        <Typography variant="h6" fontWeight="bold" marginBottom="10px">Make a New Reservation</Typography>
        {/* Reservation Form */}
        <TextField
          label="Resource"
          value={newReservation.resource}
          onChange={(e) => setNewReservation({ ...newReservation, resource: e.target.value })}
          fullWidth
        />
        <TextField
          label="Name"
          value={newReservation.name}
          onChange={(e) => setNewReservation({ ...newReservation, name: e.target.value })}
          fullWidth
        />
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

      {/* Reservation Details */}
      <ReservationDetailsCard>
        <Typography variant="h6" fontWeight="bold" marginBottom="10px">Reservation Details</Typography>
        <ReservationTable>
          <TableHead>
            <TableRow>
              <TableCell>RESOURCES</TableCell>
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
            {reservationData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.resource}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.timeIn}</TableCell>
                <TableCell>{row.timeOut}</TableCell>
                <TableCell>{row.paymentStatus}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => {
                      // Handle cancellation
                      setReservationData(reservationData.filter((_, i) => i !== index));
                    }}
                  >
                    Cancel
                  </Button>
                </TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.penalty}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </ReservationTable>
      </ReservationDetailsCard>
    </PageContainer>
  );
}

export default Reservation;
