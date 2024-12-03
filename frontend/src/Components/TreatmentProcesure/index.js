import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Chip } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'; 
import Treatment1 from '../../Assests/images/Treatment1.jpg';

const cardiologyTreatments = [
    {
            title: 'Echocardiogram',
            image: Treatment1,
            description:
              'A non-invasive test using ultrasound to create detailed images of the heart, aiding in diagnosing heart conditions.',
            benefits: ['Safe and painless', 'Accurate diagnosis', 'Quick results'],
            learnMore: '/treatments/echocardiogram',
          },
          {
            title: 'Stress Test',
            image: '/images/stress-test.jpg',
            description:
              'A procedure that measures how your heart responds during physical activity to assess overall heart health.',
            benefits: ['Monitors heart health', 'Assesses fitness levels', 'Identifies risks early'],
            learnMore: '/treatments/stress-test',
          },
          {
            title: 'Cardiac Catheterization',
            image: '/images/cardiac-catheterization.jpg',
            description:
              'A minimally invasive procedure to examine how well your heart is functioning and detect blockages.',
            benefits: ['Detects blockages', 'Minimally invasive', 'Guides further treatment'],
            learnMore: '/treatments/cardiac-catheterization',
          },
          {
            title: 'Heart Valve Repair',
            image: '/images/heart-valve-repair.jpg',
            description:
              'A surgical procedure to repair damaged heart valves, restoring normal blood flow and heart function.',
            benefits: ['Improves blood flow', 'Prevents further damage', 'Long-term solution'],
            learnMore: '/treatments/heart-valve-repair',
          },
          {
            title: 'Coronary Angiography',
            image: '/images/coronary-angiography.jpg',
            description:
              'An imaging technique to view the coronary arteries and identify blockages or narrowing of blood vessels.',
            benefits: ['Detailed imaging', 'Early detection', 'Guides intervention'],
            learnMore: '/treatments/coronary-angiography',
          },
          {
            title: 'Pacemaker Implantation',
            image: '/images/pacemaker.jpg',
            description:
              'A procedure to implant a device that helps regulate abnormal heart rhythms, improving quality of life.',
            benefits: ['Restores normal rhythm', 'Enhances energy levels', 'Reduces symptoms'],
            learnMore: '/treatments/pacemaker',
          },
          {
            title: 'Bypass Surgery',
            image: '/images/bypass-surgery.jpg',
            description:
              'A surgical procedure to restore blood flow to the heart by bypassing blocked arteries.',
            benefits: ['Improves blood flow', 'Reduces chest pain', 'Enhances heart function'],
            learnMore: '/treatments/bypass-surgery',
          },
          {
            title: 'Electrophysiology Study (EPS)',
            image: '/images/eps.jpg',
            description:
              'An advanced procedure to study the electrical activity of your heart and pinpoint rhythm abnormalities.',
            benefits: ['Diagnoses arrhythmias', 'Guides treatment', 'Improves safety'],
            learnMore: '/treatments/eps',
          },
          {
            title: 'Holter Monitoring',
            image: '/images/holter-monitoring.jpg',
            description:
              'A portable device records your heart’s activity for 24-48 hours, detecting irregular heart rhythms.',
            benefits: ['Continuous monitoring', 'Non-invasive', 'Detailed diagnosis'],
            learnMore: '/treatments/holter-monitoring',
          },
          {
            title: 'Heart Failure Management',
            image: '/images/heart-failure.jpg',
            description:
              'Comprehensive care plans to manage heart failure symptoms, improve heart function, and enhance life quality.',
            benefits: ['Symptom relief', 'Personalized care', 'Improves prognosis'],
            learnMore: '/treatments/heart-failure',
          }
];

const CardiologyTreatments = () => {
  return (
    <Box sx={{mt: 10, p: 6,  backgroundColor:'#f7f7f7', }} className="container">
      <Grid container spacing={4}>
        {/* Left Side: Heading and Description */}
        <Grid item xs={12} md={5.5}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: '#212f3d',
              fontWeight: 'bold',
              pb:1,
              display:'inline',
              borderBottom:"3px solid #90c983",
              ml: {
                xs: 2, // margin-left: 8px for extra small screens
                sm: 15, // margin-left: 20px for small screens
                md: 0, // margin-left: 40px for medium screen
              },
              fontSize:{
                xs:'1.5rem',
                sm:'1.9rem',
                md:'2.1rem',
                xl:'2.1rem',
              }
            }}
          >
            Treatments & Procedures
          </Typography>
          <Typography
            variant="body1"
            sx={{
              pt:4,
              lineHeight: 1.8,
              fontSize: "18px", 
              lineHeight: "1.8", 
              color: "#555",
               marginBottom: "20px" 
            }}
            className="treatmentbody"
          >
            
Explore a comprehensive range of specialized cardiology treatments and procedures, carefully curated by our expert team. From non-invasive diagnostics to advanced surgical interventions, we are dedicated to providing the highest standard of care to ensure your heart health is in the best hands.
<br />
Our team of experienced cardiologists, surgeons, and healthcare professionals employs the latest advancements in medical technology to deliver accurate diagnoses and compassionate care tailored to each patient’s unique needs.
<br />
We understand that every heartbeat matters, and we focus on providing holistic care that combines medical excellence with a personalized touch. Our goal is to offer you the most effective and least invasive treatment options available.
          </Typography>
        </Grid>

        {/* Right Side: Treatments in a Swiper Slider */}
        <Grid item xs={12} md={6}  sx={{
    ml: {
      xs: 0, // Small screens
      md: 6, // Medium screens
      lg: 6, // Large screens
      xl: 6, // Extra-large screens
    },
    }} >
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={{
              1440: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              480: { slidesPerView: 1 },
            }}
          >
            {cardiologyTreatments.map((treatment, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    boxShadow: 4,
                    borderRadius: 3,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="350"
                    image={treatment.image}
                    alt={treatment.title}
                    sx={{
                      p:3,
                      borderRadius: 8,
                      filter: 'brightness(0.9)',
                      '&:hover': { filter: 'brightness(1)' },
                    }}
                  />
                  <CardContent sx={{ textAlign: 'center' ,pt:0}}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 'bold', color: '#34495e', mb: 2 }}
                    >
                      {treatment.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: '#7f8c8d',
                        mb: 2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {treatment.description}
                    </Typography>
                    <Box
  sx={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 1,
    mb: 2,
  }}
>
  {treatment.benefits.map((benefit, i) => (
    <Chip
      key={i}
      label={benefit}
      size="small"
      sx={{
        p: 2,
        backgroundColor: '#ecf0f1',
        color: '#2c3e50',
        fontWeight: 'bold',
      }}
    />
  ))}
</Box>

                    <Button
                      variant="contained"
                      href={treatment.More}
                      sx={{
                        width:'10rem',
                        background: 'linear-gradient(45deg, #9ccb3d, #81c7e4, #0e92cc)',
                        color: 'white',
                        '&:hover': { background: 'linear-gradient(45deg, #81c7e4, #9ccb3d, #0e92cc)' ,
                        },
                        textTransform: 'uppercase',
                        fontSize:'1rem',
                        borderRadius:'15px',
                      }}
                    >
                      More
                    </Button>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardiologyTreatments;
