import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
const DoctorCard = ({ doctor, onSelect }) => {
  return (
    <Card
      sx={{
        mb:4,
        maxWidth: 320,
        borderRadius: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
          transform: "translateY(-4px)",
        },
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        backgroundColor: "#f7f7f7",
      }}
      className="container"
    >

      {/* Doctor Image */}
      <CardMedia
        component="img"
        height="200"
        image={doctor.photo}
        alt={doctor.name}
        sx={{
          objectPosition: "top center",
          objectFit: "cover",
          borderRadius: "8px",
          border: "3px solid #f5f5f5"
        }}
      />
      
      <CardContent sx={{ padding: "16px", paddingTop: "8px" }}>
        {/* Doctor's Name */}
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: "1.25rem",
            marginBottom: "8px",
            color: "#1976d2",
            textAlign: "center",
          }}
        >
          {doctor.name}
        </Typography>

        {/* Specialization */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: "1rem",
            lineHeight: 1.5,
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          <strong>Specialization:</strong> {doctor.specialization}
        </Typography>

        {/* Qualification */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: "1rem",
            lineHeight: 1.5,
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          <strong>Qualification:</strong> {doctor.Qualification}
        </Typography>

        {/* Experience */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: "1rem",
            lineHeight: 1.5,
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          <strong>Experience:</strong> {doctor.experience} years
        </Typography>

        {/* Button to View Profile */}
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            size="small"
            onClick={() => onSelect(doctor.id)}
            sx={{
              marginTop:'7px',
              width:'12rem',
              textTransform: "capitalize",
              background: '#47b5e5',
              color: 'black',
              padding: "6px 0px",
              borderRadius:'15px',
              fontSize:'1rem',
              borderBottom: '3px solid #0674a3'
            }}
          >
            View Profile
          </Button>
          
        </Box>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
