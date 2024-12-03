import React, { useState } from "react";
import { Box, Button, Card, CssBaseline, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import Header from "./Header";

// Styled components for centering the page
const AdminPageContainer = styled(Stack)(({ theme }) => ({
    position: "absolute",
    top: 0, // Set top to 0 to make sure it's aligned with the top of the viewport
    left: 0, // Set left to 0 to make sure it's aligned with the left side of the viewport
    transform: "none", // Remove the transform to avoid centering it if not needed
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start", // You can adjust this to center the content or align it differently
    padding: theme.spacing(4),
    backgroundColor: '#f2dbb2',
    width: "100%", // Full width of the screen
    height: "100vh", // Full height of the viewport
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(0),
    },
  }));

const OverviewCard = styled(Card)(({ theme, active }) => ({
  width: "250px",
  height: "150px",
  backgroundColor: active ? "#800000" : "#FFFFFF", // Maroon for active and light maroon for inactive
  padding: theme.spacing(2),
  borderRadius: "8px",
  textAlign: "center",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: theme.shadows[2],
  color: active ? "#FFF" : "#000",
  fontWeight: "bold",
  transition: "background-color 0.3s ease, color 0.3s ease",
  margin: theme.spacing(3),
}));

const TableContainer = styled(Card)(({ theme }) => ({
  width:"80%",
  marginTop: theme.spacing(4),
  boxShadow: theme.shadows[3],
  padding: theme.spacing(3),
}));

const TableHeader = styled(Typography)(({ theme }) => ({
    fontWeight: "bold",
    fontSize: "1.5rem",
    color: "white",
    backgroundColor: "#800000", // Maroon background color
    textAlign: "center",
    borderRadius: "4px 4px 0 0",
  }));
  
  const TableLine = styled("div")(() => ({
    height: "4px",
    backgroundColor: "#800000", // Maroon line
    marginBottom: "16px",
  }));  

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("BOOKINGS");

  const data = {
    BOOKINGS: [
      { name: "John Doe", contact: "123-456-7890", email: "john@example.com", startTime: "10:00 AM", endTime: "12:00 PM", status: "Confirmed" },
      { name: "Jane Smith", contact: "987-654-3210", email: "jane@example.com", startTime: "1:00 PM", endTime: "3:00 PM", status: "Pending" },
    ],
    EQUIPMENT: [
        { name: "Projector", quantity: 5, type: "Audio-Visual", },
        { name: "Whiteboard", quantity: 10, type: "Office" },
      ],
      PAYMENTS: [
        { amount: "$100", date: "2024-12-01" },
        { amount: "$150", date: "2024-12-02" },
      ],
      RESERVATIONS: [
        { date: "2024-12-01", time: "10:00 AM", increment: 2 },
      ],
      STUDENTS: [
        { name: "Mike Lee", program: "Engineering", year: "3rd Year" },
      ],
    };

  const handlePanelClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <CssBaseline />
      <AdminPageContainer>
      <Header />
        {/* Overview Cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            width: "100%",
            marginBottom: "30px",
            justifyContent: "center", // Center cards horizontally
          }}
        >
          {["BOOKINGS", "EQUIPMENT", "PAYMENTS", "RESERVATIONS", "STUDENTS"].map((tab) => (
            <OverviewCard
              key={tab}
              active={activeTab === tab}
              onClick={() => handlePanelClick(tab)}
            >
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                {tab}
            </Typography>
            </OverviewCard>
          ))}
        </div>

        {/* Data Table */}
        <TableContainer>
        <TableHeader variant="h6">
            {activeTab === "BOOKINGS" && "Booking System"}
            {activeTab === "EQUIPMENT" && "Equipment List"}
            {activeTab === "PAYMENTS" && "Payment Methods"}
            {activeTab === "RESERVATIONS" && "Reservation List"}
            {activeTab === "STUDENTS" && "Student List"}
            </TableHeader>
          <TableLine /> {/* Line below the title */}
          {data[activeTab].length > 0 ? (
            <table style={{ width: "100%", borderSpacing: "0 15px" }}>
              <thead>
                <tr>
                  {activeTab === "BOOKINGS" && (
                    <>
                      <th style={{ textAlign: "center", padding: "10px" }}>Name</th>
                      <th style={{ textAlign: "center", padding: "10px" }}>Contact</th>
                      <th style={{ textAlign: "center", padding: "10px" }}>Email</th>
                      <th style={{ textAlign: "center", padding: "10px" }}>Start Time</th>
                      <th style={{ textAlign: "center", padding: "10px" }}>End Time</th>
                      <th style={{ textAlign: "center", padding: "10px" }}>Status</th>
                      <th style={{ textAlign: "center", padding: "10px" }}>Actions</th>
                    </>
                  )}
                  {activeTab === "EQUIPMENT" && (
                    <>
                      <th style={{ textAlign: "center", padding: "10px" }}>Name</th>
                      <th style={{ textAlign: "center", padding: "10px" }}>Quantity</th>
                      <th style={{ textAlign: "center", padding: "10px" }}>Type</th>
                      <th style={{ textAlign: "center", padding: "10px" }}>Actions</th>
                    </>
                  )}
                  {activeTab === "PAYMENTS" && (
                    <>
                      <th style={{ textAlign: "center", padding: "10px" }}>Payment Amount</th>
                      <th style={{ textAlign: "center", padding: "10px" }}>Payment Date</th>
                      <th style={{ textAlign: "center", padding: "10px" }}>Actions</th>
                    </>
                  )}
                  {activeTab === "RESERVATIONS" && (
                    <>
                      <th style={{ textAlign: "center", padding: "10px" }}>Date</th>
                      <th style={{ textAlign: "center", padding: "10px" }}>Time</th>
                      <th style={{ textAlign: "center", padding: "10px" }}>Increment</th>
                      <th style={{ textAlign: "center", padding: "10px" }}>Actions</th>
                    </>
                  )}
                  {activeTab === "STUDENTS" && (
                    <>
                      <th style={{ textAlign: "center", padding: "10px" }}>Name</th>
                      <th style={{ textAlign: "center", padding: "10px" }}>Program</th>
                      <th style={{ textAlign: "center", padding: "10px" }}>Year</th>
                      <th style={{ textAlign: "center", padding: "10px" }}>Actions</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {data[activeTab].map((item, index) => (
                  <tr key={index}>
                    {activeTab === "BOOKINGS" && (
                      <>
                        <td style={{ textAlign: "center", padding: "10px" }}>{item.name}</td>
                        <td style={{ textAlign: "center", padding: "10px" }}>{item.contact}</td>
                        <td style={{ textAlign: "center", padding: "10px" }}>{item.email}</td>
                        <td style={{ textAlign: "center", padding: "10px" }}>{item.startTime}</td>
                        <td style={{ textAlign: "center", padding: "10px" }}>{item.endTime}</td>
                        <td style={{ textAlign: "center", padding: "10px" }}>{item.status}</td>
                      </>
                    )}
                    {activeTab === "EQUIPMENT" && (
                      <>
                        <td style={{ textAlign: "center", padding: "10px" }}>{item.name}</td>
                        <td style={{ textAlign: "center", padding: "10px" }}>{item.quantity}</td>
                        <td style={{ textAlign: "center", padding: "10px" }}>{item.type}</td>
                      </>
                    )}
                    {activeTab === "PAYMENTS" && (
                      <>
                        <td style={{ textAlign: "center", padding: "10px" }}>{item.amount}</td>
                        <td style={{ textAlign: "center", padding: "10px" }}>{item.date}</td>
                      </>
                    )}
                    {activeTab === "RESERVATIONS" && (
                      <>
                        <td style={{ textAlign: "center", padding: "10px" }}>{item.date}</td>
                        <td style={{ textAlign: "center", padding: "10px" }}>{item.time}</td>
                        <td style={{ textAlign: "center", padding: "10px" }}>{item.increment}</td>
                      </>
                    )}
                    {activeTab === "STUDENTS" && (
                      <>
                        <td style={{ textAlign: "center", padding: "10px" }}>{item.name}</td>
                        <td style={{ textAlign: "center", padding: "10px" }}>{item.program}</td>
                        <td style={{ textAlign: "center", padding: "10px" }}>{item.year}</td>
                      </>
                    )}
                    <td style={{ textAlign: "center", padding: "10px" }}>
                    <Button
                            size="small"
                            variant="outlined"
                            sx={{
                            padding: "3px 6px",
                            minWidth: "auto",
                            display: "inline-flex",
                            justifyContent: "center",
                            alignItems: "center",
                            }}
                        >
                            <FaEye />
                        </Button>
                        <Button
                            size="small"
                            variant="outlined"
                            sx={{
                            padding: "3px 6px",
                            minWidth: "auto",
                            display: "inline-flex",
                            justifyContent: "center",
                            alignItems: "center",
                            }}
                        >
                            <FaEdit />
                        </Button>
                        <Button
                            size="small"
                            variant="outlined"
                            color="error"
                            sx={{
                            padding: "3px 6px",
                            minWidth: "auto",
                            display: "inline-flex",
                            justifyContent: "center",
                            alignItems: "center",
                            }}
                        >
                            <FaTrash />
                        </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <Typography variant="body1" color="textSecondary">No data available</Typography>
          )}
        </TableContainer>
      </AdminPageContainer>
    </>
  );
};

export default AdminPage;
