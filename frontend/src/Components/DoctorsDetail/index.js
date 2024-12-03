import React from "react";
import { Typography, IconButton, Box, List, ListItem, Button, Grid } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EnglishIcon from "@mui/icons-material/Language"; // You can replace with a custom icon/image
import SpanishIcon from "@mui/icons-material/Translate"; // You can replace with a custom icon/image

const DoctorDetail = ({ doctor, onClose, onBookAppointment }) => {
  return (
    <Box
      sx={{
        position: "relative",
        padding: "40px",
        borderRadius: "16px",
        maxWidth: "900px",
        margin: "40px auto",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
        backgroundColor: "#fff",
        overflow: "hidden",
        transition: "all 0.3s ease",
        "&:hover": {
          boxShadow: "0 12px 24px rgba(0, 0, 0, 0.2)",
        },
        background: "linear-gradient(135deg, #f5f5f5, #e0e0e0)",
        borderTop: "8px solid #1976d2",
        paddingBottom: "40px",
      }}
    >
      {/* Close Button (Cross Icon) */}
      <IconButton
        sx={{
          position: "absolute",
          top: "16px",
          right: "16px",
          zIndex: 1,
          color: "#555",
          "&:hover": {
            color: "#d32f2f",
          },
        }}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>

      {/* Doctor Photo */}
      <Box sx={{ mb: 4, textAlign: "center", borderRadius: "50%", overflow: "hidden" }}>
        <img
          src={doctor.photo}
          alt={doctor.name}
          style={{
            width: "250px",
            height: "250px",
            objectFit: "cover",
            borderRadius: "50%",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        />
      </Box>

      {/* Doctor Name and Specialization */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "#1976d2",
          fontSize: "2rem",
          letterSpacing: "1px",
          textTransform: "capitalize",
          marginBottom: "0.5rem",
        }}
      >
        {doctor.name}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{
          fontSize: "1.2rem",
          fontStyle: "italic",
          textAlign: "center",
          marginBottom: "1rem",
          color: "#757575",
        }}
      >
        {doctor.specialization}
      </Typography>

      {/* Doctor Contact Information */}
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            fontWeight: "bold",
            fontSize: "1rem",
            color: "#333",
            marginBottom: "1rem",
          }}
        >
          <strong>Contact:</strong> {doctor.contact}
        </Typography>

        {/* Doctor Bio */}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: 2,
            lineHeight: "1.8",
            fontSize: "1rem",
            color: "#333",
          }}
        >
          <strong>Bio:</strong> {doctor.bio}
        </Typography>

        {/* Education */}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: 2,
            fontWeight: "bold",
            color: "#333",
          }}
        >
          <strong>Education:</strong> {doctor.education}
        </Typography>

        {/* Certifications */}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: 2,
            fontWeight: "bold",
            color: "#333",
          }}
        >
          <strong>Certifications:</strong>
        </Typography>
        <List sx={{ paddingLeft: "20px", color: "#333", marginBottom: "1rem" }}>
          {doctor.certifications.map((cert, index) => (
            <ListItem
              key={index}
              sx={{
                padding: "4px 0",
                fontSize: "1rem",
                lineHeight: "1.5",
                color: "#555",
                "&:hover": {
                  color: "#1976d2",
                },
              }}
            >
              {cert}
            </ListItem>
          ))}
        </List>

        {/* Clinic Address */}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: 2,
            fontWeight: "bold",
            color: "#333",
          }}
        >
          <strong>Clinic Address:</strong> {doctor.clinic_address}
        </Typography>

        {/* Availability */}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: 2,
            fontWeight: "bold",
            color: "#333",
          }}
        >
          <strong>Availability:</strong>
        </Typography>
        <List sx={{ paddingLeft: "20px", color: "#333", marginBottom: "1rem" }}>
          {doctor.availability.map((day, index) => (
            <ListItem
              key={index}
              sx={{
                padding: "4px 0",
                fontSize: "1rem",
                lineHeight: "1.5",
                color: "#555",
                "&:hover": {
                  color: "#1976d2",
                },
              }}
            >
              {day}
            </ListItem>
          ))}
        </List>

        {/* Languages Spoken */}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            mt: 2,
            fontWeight: "bold",
            color: "#333",
          }}
        >
          <strong>Languages Spoken:</strong>
        </Typography>

        {/* Displaying Languages with Icons */}
        <Grid container spacing={2} sx={{ paddingLeft: "20px", color: "#333" }}>
          {doctor.languages.map((language, index) => (
            <Grid item key={index} sx={{ display: "flex", alignItems: "center" }}>
              {/* Replace with actual image/icons */}
              {language === "English" && (
                <EnglishIcon sx={{ mr: 1, fontSize: "1.5rem", color: "#1976d2" }} />
              )}
              {language === "Spanish" && (
                <SpanishIcon sx={{ mr: 1, fontSize: "1.5rem", color: "#e53935" }} />
              )}
              <Typography variant="body1" sx={{ fontSize: "1rem" }}>
                {language}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Book Appointment Button */}
      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
             background: 'linear-gradient(45deg, #9ccb3d, #81c7e4, #0e92cc)',
            color: 'white',
            '&:hover': { background: 'linear-gradient(45deg, #81c7e4, #9ccb3d, #0e92cc)' ,
            },
            mt: 2,
            fontWeight: '600',
            textTransform: 'uppercase',
            p: 1,
            fontSize:'1.3rem',
            borderRadius:'15px',
          }}
          onClick={onBookAppointment}
        >
          Book Appointment
        </Button>
      </Box>
    </Box>
  );
};

export default DoctorDetail;
