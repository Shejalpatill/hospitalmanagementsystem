// src/pages/ServicesPage.js
import React, { useState, useRef } from "react";
import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import { FaHeart, FaStethoscope, FaHeartbeat, FaMedkit, FaPlusCircle, FaProcedures, FaAmbulance } from "react-icons/fa";
import borderImage from '../../Assests/images/border222.png'; 

const servicesData = [
  {
    id: 1,
    name: "Cardiology Care",
    description: "Comprehensive heart health services including diagnostic tests and treatments for heart conditions.",
    icon: <FaHeart size={40} style={{ color: "#9ccb3d" }} />,
    details: `
      <strong>Cardiology Care Services Include:</strong>
      - Advanced diagnostic tests like ECG, echocardiograms, and stress tests.
      - Preventive and personalized care plans for managing heart health.
      - Specialized interventions such as angioplasty, bypass surgery, and valve replacement.
      - Comprehensive post-treatment follow-ups for long-term health.
      
      <strong>Why Choose Us:</strong>
      - Experienced cardiologists and cutting-edge technology.
      - Tailored programs designed to ensure the best outcomes for patients.
      - Emphasis on both physical and emotional well-being during treatment.
      
      <strong>Additional Resources:</strong>
      - Access to a library of educational materials about heart health.
      - 24/7 availability for consultations and urgent concerns.
    `
  },
  {
    id: 2,
    name: "Emergency Services",
    description: "24/7 emergency care to handle all critical health conditions and provide life-saving treatments.",
    icon: <FaAmbulance size={40} style={{ color: "#9ccb3d" }} />,
    details: `
      <strong>Our Emergency Services Offer:</strong>
      - Rapid response for heart attacks, strokes, and other critical conditions.
      - State-of-the-art facilities equipped to handle any emergency.
      - Continuous monitoring and expert-led interventions to stabilize patients.
      
      <strong>Key Benefits:</strong>
      - Reduced mortality rates through timely interventions.
      - Seamless integration with specialty care for a smooth recovery.
      - Support for families during critical situations.
      
      <strong>Future Enhancements:</strong>
      - Introduction of AI-driven diagnostics to reduce response times.
      - Expansion of ambulance networks for faster patient transport.
    `
  },
  {
    id: 3,
    name: "Preventive Care",
    description: "Focus on preventing diseases through screenings, regular check-ups, and lifestyle advice.",
    icon: <FaStethoscope size={40} style={{ color: "#9ccb3d" }} />,
    details: `
      <strong>Preventive Care Includes:</strong>
      - Early detection screenings for hypertension, diabetes, and cholesterol.
      - Tailored lifestyle advice for a healthy heart and overall wellness.
      - Vaccination drives for community-wide health benefits.
      
      <strong>Our Promise:</strong>
      - Proactive care with a focus on early detection.
      - Holistic approach to well-being through comprehensive lifestyle guidance.
      - Dedicated wellness coaches to support ongoing progress.
    `
  },
  {
    id: 4,
    name: "Cardiac Rehabilitation",
    description: "A structured program designed to improve heart health and recovery after heart surgery or a heart attack.",
    icon: <FaHeartbeat size={40} style={{ color: "#9ccb3d" }} />,
    details: `
      <strong>Rehabilitation Program Highlights:</strong>
      - Supervised exercise and physical therapy for recovery.
      - Dietary counseling to support heart-healthy habits.
      - Stress management techniques for better mental health.
      
      <strong>Advanced Options:</strong>
      - Group therapy sessions to foster community support.
      - Integration with fitness trackers for progress monitoring.
      - Access to online resources for home-based rehab activities.
    `
  },
  {
    id: 5,
    name: "Electrophysiology",
    description: "Specialized services for the treatment of arrhythmias and other heart rhythm disorders.",
    icon: <FaHeartbeat size={40} style={{ color: "#9ccb3d" }} />,
    details: `
      <strong>Electrophysiology Services:</strong>
      - Advanced studies for diagnosing arrhythmias.
      - Treatment plans using minimally invasive catheter ablation.
      - Life-saving device implants such as pacemakers and defibrillators.
      
      <strong>Benefits:</strong>
      - Precise interventions to restore normal heart rhythms.
      - Improved quality of life with reduced risks of complications.
      - Ongoing support and device management services.
    `
  },
  {
    id: 6,
    name: "Heart Surgery",
    description: "Comprehensive surgical services for heart conditions, including bypass surgery and valve replacements.",
    icon: <FaPlusCircle size={40} style={{ color: "#9ccb3d" }} />,
    details: `
      <strong>Surgical Expertise:</strong>
      - Coronary artery bypass grafting for severe blockages.
      - Innovative minimally invasive techniques for faster recovery.
      - Comprehensive post-surgical care programs.
      
      <strong>Highlights:</strong>
      - Focus on patient-centric approaches and minimally invasive solutions.
      - Continuous monitoring to ensure optimal outcomes after surgery.
    `
  },
  {
    id: 7,
    name: "Intensive Care Unit (ICU)",
    description: "Advanced critical care for severe medical conditions in a specialized environment.",
    icon: <FaProcedures size={40} style={{ color: "#9ccb3d" }} />,
    details: `
      <strong>ICU Services Include:</strong>
      - Continuous monitoring and advanced life support.
      - Expertise in managing cardiac and respiratory failures.
      - Collaborative care from a multidisciplinary team.
      
      <strong>Why ICU with Us:</strong>
      - High success rates with experienced intensivists and nurses.
      - Family-centered care to ensure emotional support for patients.
    `
  },
  {
    id: 8,
    name: "Pediatric Cardiology",
    description: "Specialized care for children with congenital or acquired heart conditions.",
    icon: <FaHeart size={40} style={{ color: "#9ccb3d" }} />,
    details: `
      <strong>Pediatric Cardiology Focus:</strong>
      - Diagnosis and treatment for congenital heart defects.
      - Non-invasive imaging and advanced interventions.
      - Family education to support care at home.
      
      <strong>Benefits:</strong>
      - Tailored care plans for the specific needs of young patients.
      - Emotional support programs for children and families.
    `
  }
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const detailsRef = useRef(null);
  const serviceRefs = useRef({});

  const handleServiceClick = (service) => {
    setSelectedService(service);
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCloseDetails = () => {
    setSelectedService(null);
    if (serviceRefs.current[selectedService?.id]) {
      serviceRefs.current[selectedService?.id].scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box sx={{ padding: 4}} className="container">
      <Typography
      variant="h4"
      align="center"
      sx={{ fontWeight: "bold", color: '#212f3d'}}
    >
<span className="fontcolor">Your Heart Deserves the Best: </span>Explore Our <span className="Headingcolor">Services</span>
    </Typography>

    <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            mb: 4,
          }}
        >
          <img
            src={borderImage}
            alt="Border"
            width={450}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              paddingBottom:"20px"
            }}
          />
        </Box>
      <Grid container spacing={4} justifyContent="center">
        {servicesData.map((service) => (
          <Grid item xs={12} sm={6} md={3} key={service.id}>
            <Paper
              elevation={3}
              sx={{
                height:'250px',
                padding: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "#f3f3f3",
                borderRadius: 2,
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" }
              }}
              onClick={() => handleServiceClick(service)}
              ref={(el) => (serviceRefs.current[service.id] = el)}
            >
              <Box sx={{ mb: 2 }}>{service.icon}</Box>
              <Typography variant="h6" gutterBottom sx={{fontWeight:'bold'}}>
                {service.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {selectedService && (
        <Box
          ref={detailsRef}
          sx={{ marginTop: 6, padding: 4, backgroundColor: "#f9f9f9", borderRadius: 2, display:'flex',alignItems:'center', flexDirection:'column'}}
        >
          <Typography variant="h5" gutterBottom>
            More Information on {selectedService.name}
          </Typography>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{ __html: selectedService.details }}
            sx={{ whiteSpace: "pre-wrap" }}
          />
          <Button
            variant="contained"
            size="small"
            onClick={handleCloseDetails}
            sx={{
              marginTop:'7px',
              width:'10rem',
              textTransform: "uppercase",
              background: '#47b5e5',
              padding: "6px 0px",
              borderRadius:'15px',
              fontSize:'1rem',
              borderBottom: '3px solid #0674a3'
            }}
          >
            close
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ServicesPage;
