import { Box, Typography, Container, Grid, Paper } from "@mui/material";
import borderImage from '../../Assests/images/border222.png'; 
import BookAppointmentForm from "../../Components/BookAppoinmrntForm";

const Appointment = () => {

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "auto",
        flexDirection: "column",
        backgroundImage:{}
      }}
      className="container appointmentpage"
    >
      <Box className='container'
       
      >
        <Typography
      variant="h4"
      align="center"
      sx={{ fontWeight: "bold", mt: 5,  color: '#212f3d', }}
    >
      Schedule Your <span className="Headingcolor">Appointment with Us</span>
    </Typography>

    <Box
          sx={{
            textAlign:'center',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            mb: 2,
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
        <Typography
          variant="body1"
          align="center"
          sx={{ color: "text.secondary", fontSize:'1.2rem',textAlign:'center'}}
        >
          We are here to provide you with the best services. <br /> Book your
          appointment today and experience excellence.
        </Typography>
        <Box sx={{ width: "100%", marginTop: "2rem", padding: "1rem 0" ,fontWeight:'bold'}}>
        <Typography
            variant="body1"
            gutterBottom
              align="center"
              className="heading1"
            sx={{
                pb:1,
                color: '#212f3d',
                borderBottom:"3px solid #90c983",
                display:'inline',
              ml: {
                xs: 9, // margin-left: 8px for extra small screens
                sm: 24, // margin-left: 20px for small screens
                md: 34, // margin-left: 40px for medium screens
                lg: 50, // margin-left: 80px for large screens
              },
              fontSize:{
               xs:'1.2rem',
               sm:'1.5rem',
               md:'1.8rem',
               xl:'1.8rem',
              }
            }}
          >
            Our Appointment Process
          </Typography>

  <Grid container spacing={3} sx={{mt:3}}>
    {[
      {
        step: "Step 1",
        title: "Choose Your Service",
        description: "Browse through our list of services and select the one that suits your needs.",
        icon: "📝",
      },
      {
        step: "Step 2",
        title: "Book an Appointment",
        description: "Fill out the appointment form or call us to schedule your visit.",
        icon: "📅",
      },
      {
        step: "Step 3",
        title: "Confirmation",
        description: "Receive confirmation of your appointment via email or SMS.",
        icon: "✅",
      },
      {
        step: "Step 4",
        title: "Visit Us",
        description: "Arrive at our facility on your scheduled date and enjoy our exceptional services.",
        icon: "🏥",
      },
    ].map((process, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Paper
          sx={{
            textAlign: "center",
            padding: "2rem",
            backgroundColor: "rgba(250, 250, 250, 0.9)",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: "2.5rem",
              color: "primary.main",
              mb: 2,
            }}
          >
            {process.icon}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            {process.step}
          </Typography>
          <Typography variant="h6" sx={{ mb: 1 }}>
            {process.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {process.description}
          </Typography>
        </Paper>
      </Grid>
    ))}
  </Grid>
</Box>
      
        <div className="bookform">
          <BookAppointmentForm />
        </div>

     
<Box sx={{ width: "100%", marginTop: "3rem", padding: "1rem 0" }}>
  <Typography variant="h5" align="center" sx={{ mb: 3 }}>
    What Our Customers Say
  </Typography>
  <Grid container spacing={3}>
    {[
      {
        name: "John Doe",
        feedback:
          "Booking an appointment was so easy! The staff was professional, and the service was excellent. Highly recommend!",
        rating: "⭐⭐⭐⭐⭐",
      },
      {
        name: "Sarah Lee",
        feedback:
          "The team is very accommodating, and the facilities are top-notch. They genuinely care about your comfort and needs.",
        rating: "⭐⭐⭐⭐⭐",
      },
      {
        name: "Michael Smith",
        feedback:
          "I was impressed with the level of personalized care. From booking to the actual appointment, everything was seamless!",
        rating: "⭐⭐⭐⭐⭐",
      },
    ].map((testimonial, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Paper
          sx={{
            textAlign: "center",
            padding: "2rem",
            backgroundColor: "rgba(250, 250, 250, 0.95)",
            borderRadius: "10px",
            boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontStyle: "italic", mb: 2 }}
          >
            "{testimonial.feedback}"
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", mb: 1, color: "primary.main" }}
          >
            - {testimonial.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {testimonial.rating}
          </Typography>
        </Paper>
      </Grid>
    ))}
  </Grid>
</Box>


        <Box sx={{ width: "100%", marginTop: "3rem" }}>
  <Typography variant="h5" align="center" sx={{ mb: 3 }}>
    Frequently Asked Questions
  </Typography>
  <Grid container spacing={2}>
    {[
      {
        question: "How can I book an appointment?",
        answer: "Fill out the form above or call us directly at our contact number.",
      },
      {
        question: "What services do you offer?",
        answer: "We offer consultation, therapy, diagnostic services, and more specialized care.",
      },
      {
        question: "Is there a cancellation policy?",
        answer: "Yes, you can cancel or reschedule your appointment 24 hours in advance.",
      },
      {
        question: "Do I need to bring any documents for my appointment?",
        answer:
          "Yes, please bring your valid ID, previous medical records, and any relevant documents related to your condition.",
      },
      {
        question: "Are walk-in appointments available?",
        answer:
          "Walk-in appointments are available, but we recommend booking in advance to secure your preferred time slot.",
      },
    ].map((faq, index) => (
      <Grid item xs={12} key={index}>
        <Paper sx={{ padding: "1rem" }}>
          <Typography variant="h6">{faq.question}</Typography>
          <Typography variant="body2" color="text.secondary">
            {faq.answer}
          </Typography>
        </Paper>
      </Grid>
    ))}
  </Grid>
</Box>

      </Box>
    </Container>
  );
};

export default Appointment;
