// src/pages/HomePage.js
import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import { FaHeart, FaStethoscope, FaMedkit, FaHeartbeat, FaArrowRight } from "react-icons/fa"; // Example icons for services
import { useNavigate } from "react-router-dom"; // To navigate to the Services page

const servicesData = [
  {
    id: 1,
    name: "Cardiology Care",
    icon: <FaHeart size={40} />,
    route: "/services/cardiology-care", // Link for more details
  },
  {
    id: 2,
    name: "Emergency Services",
    icon: <FaMedkit size={40} />,
    route: "/services/emergency-services", // Link for more details
  },
  {
    id: 3,
    name: "Preventive Care",
    icon: <FaStethoscope size={40} />,
    route: "/services/preventive-care", // Link for more details
  },
  {
    id: 4,
    name: "Cardiac Rehabilitation",
    icon: <FaHeartbeat size={40} />,
    route: "/services/cardiac-rehabilitation", // Link for more details
  },
];

const HomeServiceContent = () => {
  const navigate = useNavigate(); // Hook to navigate

  // Function to navigate to Services Page
  const navigateToService = () => {
    navigate("/services"); // Navigate to the services page
  };

  return (
    <Box sx={{ padding: 5 ,mt:4}} className="container">
      {/* Heading and Icon in one row */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography
            variant="h4"
            gutterBottom
              align="center"
              className="heading3"
            sx={{
                pb:1,
                mb:4,
                color: '#212f3d',
                fontWeight: 'bold',
                borderBottom:"3px solid #90c983",
                display:'inline',
              ml: {
                xs: 12, // margin-left: 8px for extra small screens
                sm: 28, // margin-left: 20px for small screens
                md: 41, // margin-left: 40px for medium screens
                lg: 64, // margin-left: 80px for large screens
              },
              fontSize:{
               xs:'1.5rem',
               sm:'1.9rem',
               md:'2.1rem',
               xl:'2.1rem',
              }
            }}
          >
           Our Services
          </Typography>
        <FaArrowRight
          size={20}
          style={{ cursor: "pointer", color: "#1976d2" }}
          onClick={navigateToService} // Navigate to the services page on click
        />
      </Box>

      {/* Service grid */}
      <Grid container spacing={4} justifyContent="center">
        {servicesData.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service.id}>
            <Paper
              elevation={3}
              sx={{
                padding: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#f3f3f3",
                borderRadius: 2,
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box sx={{ mb: 1 }}>{service.icon}</Box>
              <Typography variant="h6" gutterBottom>
                {service.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeServiceContent;
