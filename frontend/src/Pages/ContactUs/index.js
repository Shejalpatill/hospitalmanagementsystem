import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import borderImage from '../../Assests/images/border222.png'; 
import BookAppointmentForm from "../../Components/BookAppoinmrntForm";
import icon1 from '../../Assests/images/icon1.png'; 
import icon2 from '../../Assests/images/icon2.png'; 
import icon3 from '../../Assests/images/icon3.png'; 
import icon4 from '../../Assests/images/icon4.png'; 
import message from '../../Assests/images/message.png'; 

const ContactUsPage = () => {
  return (
    <Box sx={{ padding: 4,  minHeight: "100vh" }} className="container">
      {/* Page Header */}
      <Typography
      variant="h4"
      align="center"
      sx={{ fontWeight: "bold", color: '#212f3d', }}
    >
     Let's Talk About Your  <span className="Headingcolor">Heart Health</span>
    </Typography>

    <Box
          sx={{
            textAlign:'center',
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

      {/* Main Content */}
      <Grid container spacing={4}>
        {/* Contact Details */}
        <Grid item xs={12} md={12}>
  <Paper
    elevation={3}
    sx={{
      padding: 3,
      backgroundColor: "#f9f9f9",
      borderRadius: 2,
      height: "100%",
      display:'flex',
      alignItems:'center',
      flexDirection:'column',
      textAlign:'left'
    }}
  >
    <Typography
            variant="h6"
            gutterBottom
            sx={{
                fontSize:'25px',
              color: '#212f3d',
              fontWeight: 'bold',
              borderBottom:"3px solid #90c983",
              display:'inline',
             
            }}
          >
            Get in Touch
          </Typography>
  <Typography variant="body1" sx={{ marginBottom: 3 ,pt:2,
              lineHeight: 1.8,
              fontSize: "18px", 
              lineHeight: "1.8", 
              color: "#555",
               marginBottom: "20px",
               textAlign:'center' }}>
      We are here to assist you with your heart health needs. Feel free to reach out to us through any of the following methods:
    </Typography>
    {/* Phone Number */}
    <Box sx={{ 
        display:'flex',
      alignItems:'left',
      flexDirection:'column'}}>
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <FaPhoneAlt style={{ color: "#0657a3", marginRight: 10 }} />
      <Typography variant="body1">
        <strong sx={{fontSize:6}}>Phone:</strong> +1 (555) 123-4567
      </Typography>
    </Box>

    {/* Email */}
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <FaEnvelope style={{ color: "#0657a3", marginRight: 10 }} />
      <Typography variant="body1">
        <strong>Email:</strong> info@cardiologyhospital.com
      </Typography>
    </Box>

    {/* Physical Address */}
    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
      <FaMapMarkerAlt style={{ color: "#0657a3", marginRight: 10 }} />
      <Typography variant="body1">
        <strong>Address:</strong> 123 Heartbeat Lane, Cardio City, USA
      </Typography>
    </Box>

    {/* Social Media Links */}
    <Typography variant="h6" sx={{ color:'#282727' , marginBottom: 1, fontSize:'17px' }}>
    <strong> Connect with Us:</strong>
    </Typography>
    <Box sx={{ display: "flex", gap: 1.1 }}>
      <a href="https://facebook.com/cardiologyhospital" target="_blank" rel="noopener noreferrer">
        <img src={icon1} alt="Facebook" width="30px" />
      </a>
      <a href="https://twitter.com/cardiologyhospital" target="_blank" rel="noopener noreferrer">
        <img src={icon2} alt="Twitter" width="32px" />
      </a>
      <a href="https://linkedin.com/company/cardiologyhospital" target="_blank" rel="noopener noreferrer">
        <img src={icon3} alt="LinkedIn" width="32px" />
      </a>
      <a href="https://instagram.com/cardiologyhospital" target="_blank" rel="noopener noreferrer">
        <img src={icon4} alt="Instagram" width="32px" />
      </a>
    </Box>

    {/* Live Chat */}
    <Box sx={{ display: "flex", alignItems: "center", mt: 2}}>
      <Typography variant="body1">
        <strong style={{ marginRight: 5, marginLeft:3}} >Live Chat: </strong>  Available 24/7 for immediate assistance.
      </Typography>
    </Box>
    </Box>
  </Paper>
</Grid>

       <BookAppointmentForm/>

        {/* Location Map */}
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              backgroundColor: "#ffffff",
              borderRadius: 2,
              display:'flex',
              alignItems:'center',
              flexDirection:'column',
              textAlign:'left'
            }}
          >

            <Typography
            variant="h6"
            gutterBottom
            sx={{
                fontSize:'25px',
              color: '#212f3d',
              fontWeight: 'bold',
              height:'100%',
              borderBottom:"3px solid #90c983",
              display:'inline',
             mb:3
             
            }}
          >
           Visit Us
          </Typography>
            <Typography variant="body1" gutterBottom sx={{pb:2}}>
              Our state-of-the-art cardiology hospital is located at the heart
              of Cardio City. Come and visit us to experience exceptional care.
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509807!2d144.96305771566776!3d-37.81410774212861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5774d73c3f2dc11!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1633039820161!5m2!1sen!2sau"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Paper>
        </Grid>

        {/* Business Hours */}
        <Grid item xs={12} md={12}>
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              backgroundColor: "#ffffff",
              borderRadius: 2,
              height: "100%",
              display:'flex',
              alignItems:'center',
              flexDirection:'column',
              textAlign:'center'
            }}
          >
            <Typography
            variant="h6"
            gutterBottom
            sx={{
                fontSize:'25px',
              color: '#212f3d',
              fontWeight: 'bold',
              borderBottom:"3px solid #90c983",
              display:'inline',
             
            }}
          >
          Business Hours
          </Typography>
            <Typography variant="body1" gutterBottom sx={{pt:2,pb:1}}>
              <strong>Monday - Sunday:</strong> Open 24 Hours
            </Typography>
            <Typography variant="body1" sx={{pb:1}}>
              Our dedicated team is here to provide assistance at any time of
              the day. <br /> Whether it’s a medical emergency or a general inquiry,
              you can count on us for 24/7 support.
            </Typography>
          </Paper>
        </Grid>

        {/* FAQs */}
        <Grid item xs={12}>
        <Paper
      elevation={3}
      sx={{
        padding: 3,
        backgroundColor: "#ffffff",
        borderRadius: 2,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
            variant="h6"
            gutterBottom
            sx={{
                fontSize:'25px',
              color: '#212f3d',
              fontWeight: 'bold',
              borderBottom:"3px solid #90c983",
              display:'inline',
             
            }}
          >
          Frequently Asked Questions
          </Typography>

      <Box
        sx={{
          width: "100%",
          maxWidth: "800px",
          padding: "20px"
        }}
      >
        {[
          {
            question: "What services do you offer?",
            answer:
              "We provide a wide range of cardiology services, including diagnostics, treatments, and surgical procedures.",
          },
          {
            question: "Do you offer 24-hour emergency services?",
            answer: "Yes, our emergency care unit operates 24/7 to address any urgent medical needs.",
          },
          {
            question: "Can I book an appointment online?",
            answer: "Yes, you can book an appointment by filling out our contact form or calling our hotline.",
          },
          {
            question: "What insurance plans do you accept?",
            answer: "We accept most major insurance plans. Contact us for a full list of providers.",
          },
          {
            question: "Do you have parking facilities?",
            answer: "Yes, we offer free parking for all our patients and visitors.",
          },
        ].map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`faq${index + 1}-content`}
              id={`faq${index + 1}-header`}
            >
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactUsPage;
