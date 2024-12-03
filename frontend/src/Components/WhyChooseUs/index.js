import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import borderImage from '../../Assests/images/border222.png'; 

const WhyChooseUs = () => {
  return (
    <Box sx={{ mt:6,p:6, backgroundColor: "#f7f7f7" }} className="container">
<Typography
            variant="h4"
            gutterBottom
              align="center"
              className="heading"
            sx={{
                pb:1,
                color: '#212f3d',
                fontWeight: 'bold',
                borderBottom:"3px solid #90c983",
                display:'inline',
              ml: {
                xs: 9, // margin-left: 8px for extra small screens
                sm: 25, // margin-left: 20px for small screens
                md: 39, // margin-left: 40px for medium screens
                lg: 61, // margin-left: 80px for large screens
              },
              fontSize:{
               xs:'1.5rem',
               sm:'1.9rem',
               md:'2.1rem',
               xl:'2.1rem',
              }
            }}
          >
            Why Choose Us
          </Typography>


      {/* Main Grid Layout */}
      <Grid container spacing={10} sx={{ justifyContent: "center", pt:6}}>
        {/* Left Side: Paragraph Content */}
        <Grid item xs={12} md={7}>
        <Typography variant="h6" sx={{ fontWeight: 600, textAlign: "center", marginBottom: "30px", color: "#666"}}>
        We are committed to providing exceptional cardiology care with a focus on your health and well-being. Here's why we stand out.
      </Typography>
          <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: "1.8", color: "#555", marginBottom: "20px" }} className="treatmentbody">
            At our hospital, we understand the importance of heart health. Our team of skilled cardiologists, advanced technology, and patient-focused approach work together to provide you with the best care possible. Whether you need preventive care, diagnostics, or advanced treatments, we are here for you every step of the way. Your health is our priority.
          </Typography>

          <Typography variant="body1" sx={{ fontSize: "18px", lineHeight: "1.8", color: "#555" }} className="treatmentbody">
            Our hospital offers comprehensive cardiology services ranging from basic heart health screenings to complex heart surgeries. With a patient-centered approach, we aim to deliver personalized care with the highest standard of excellence. We utilize cutting-edge equipment and advanced procedures to ensure the best outcomes for our patients.
          </Typography>
        </Grid>

        {/* Right Side: Reasons List */}
        <Grid item xs={12} md={5} >
          <Box sx={{ml:6, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
            {/* Reason 1 */}
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <CheckCircle sx={{ fontSize: "30px", color: "#2f9b89", marginRight: "15px" }} />
              <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: 600, color: "#333" }}>
                Experienced Cardiologists
              </Typography>
            </Box>

            {/* Reason 2 */}
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <CheckCircle sx={{ fontSize: "30px", color: "#2f9b89", marginRight: "15px" }} />
              <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: 600, color: "#333" }}>
                State-of-the-art Facilities
              </Typography>
            </Box>

            {/* Reason 3 */}
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <CheckCircle sx={{ fontSize: "30px", color: "#2f9b89", marginRight: "15px" }} />
              <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: 600, color: "#333" }}>
                Personalized Care
              </Typography>
            </Box>

            {/* Reason 4 */}
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <CheckCircle sx={{ fontSize: "30px", color: "#2f9b89", marginRight: "15px" }} />
              <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: 600, color: "#333" }}>
                Comprehensive Cardiac Services
              </Typography>
            </Box>

            {/* Reason 5 */}
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <CheckCircle sx={{ fontSize: "30px", color: "#2f9b89", marginRight: "15px" }} />
              <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: 600, color: "#333" }}>
                24/7 Emergency Care
              </Typography>
            </Box>

            {/* Reason 6 */}
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <CheckCircle sx={{ fontSize: "30px", color: "#2f9b89", marginRight: "15px" }} />
              <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: 600, color: "#333" }}>
                Patient-Centered Approach
              </Typography>
            </Box>

            {/* Reason 7 */}
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <CheckCircle sx={{ fontSize: "30px", color: "#2f9b89", marginRight: "15px" }} />
              <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: 600, color: "#333" }}>
                Advanced Diagnostic Tools
              </Typography>
            </Box>

            {/* Reason 8 */}
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <CheckCircle sx={{ fontSize: "30px", color: "#2f9b89", marginRight: "15px" }} />
              <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: 600, color: "#333" }}>
                Proven Success in Heart Surgeries
              </Typography>
            </Box>

            {/* Reason 9 */}
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <CheckCircle sx={{ fontSize: "30px", color: "#2f9b89", marginRight: "15px" }} />
              <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: 600, color: "#333" }}>
                Innovative Treatment Options
              </Typography>
            </Box>

            {/* Reason 10 */}
            <Box sx={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
              <CheckCircle sx={{ fontSize: "30px", color: "#2f9b89", marginRight: "15px" }} />
              <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: 600, color: "#333" }}>
                Heart Health Education Programs
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
