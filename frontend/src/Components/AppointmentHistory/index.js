import React from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const mockAppointments = [
  { id: 1, patientName: "John Doe", date: "2024-12-01", time: "10:00 AM", status: "Accepted" },
  { id: 2, patientName: "Jane Smith", date: "2024-12-02", time: "2:00 PM", status: "Rejected" },
  { id: 3, patientName: "Alice Johnson", date: "2024-12-03", time: "4:00 PM", status: "Pending" },
];

const AppointmentHistory = () => {
  return (
    <Box sx={{ padding: "20px", maxWidth: "800px", margin: "20px auto" }}>
      <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}>
        Appointment History
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Patient Name</strong></TableCell>
              <TableCell><strong>Date</strong></TableCell>
              <TableCell><strong>Time</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockAppointments.map((appointment) => (
              <TableRow key={appointment.id}>
                <TableCell>{appointment.patientName}</TableCell>
                <TableCell>{appointment.date}</TableCell>
                <TableCell>{appointment.time}</TableCell>
                <TableCell>{appointment.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AppointmentHistory;
