import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { Box, Typography, Button } from '@mui/material';
import DrExpert1 from '../../Assests/images/doctor11.png';
import DrExpert2 from '../../Assests/images/doctor2.png';
import DrExpert3 from '../../Assests/images/doctor3.png';
import DrExpert4 from '../../Assests/images/doctor1.png';

// Example doctors data
const doctors = [
  { id: 1, image: DrExpert1, name: "Dr. John Doe",  },
  { id: 2, image: DrExpert2, name: "Dr. Jane Smith" },
  { id: 3, image: DrExpert3, name: "Dr. Emi Johnson" },
  { id: 4, image: DrExpert4, name: "Dr. Alan Brown"  },
  { id: 1, image: DrExpert1, name: "Dr. John Doe",  },
  { id: 2, image: DrExpert2, name: "Dr. Jane Smith" }
];

export default function DoctorSlider() {
  const navigate = useNavigate();  // Use the hook to navigate

  const handleNavigate = () => {
    navigate('/appointment'); // Navigate to the appointment page
  };

  return (
    <Box className="container" sx={{ pl: 6 ,pr:6 ,mt:5}}>
      <Typography
            variant="h4"
            gutterBottom
            sx={{
              pb:1,
              color: '#212f3d',
              fontWeight: 'bold',
              borderBottom:"3px solid #90c983",
              display:'inline',
              ml: {
                xs: 6, // margin-left: 8px for extra small screens
                sm: 20, // margin-left: 20px for small screens
                md: 34, // margin-left: 40px for medium screens
                lg: 55, // margin-left: 80px for large screens
              },
              fontSize:{
                xs:'1.5rem',
                sm:'1.9rem',
                md:'2.1rem',
                xl:'2.1rem',
              }
            }}
            className="heading1"
          >
            Our Experts Doctors
          </Typography>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          1440: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 },
        }}
      >
        {doctors.map((doctor,index) => (
          <SwiperSlide key={index}>
            <Box
              className="doctor-card"
              sx={{
                mt:6,
                textAlign: 'center',
                p: 2,
                border: '1px solid #ddd',
                borderRadius: 2,
                boxShadow: 6,
                overflow: 'hidden', // Prevents overflow of hover animations
              }}
            >
              <Box
                className="image-wrapper"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '8px',
                }}
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  style={{
                    width: '100%',
                    height: '400px',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                    position: 'relative',
                  }}
                />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: '700', mt: 2, fontSize: '1.3rem' }}>
                {doctor.name}
              </Typography>
              <Button
                sx={{
                  marginBottom:2,
                  mt: 1,
                  borderRadius: '15px',
                  pl: '20px',
                  pr: '20px',
                  pt: '10px',
                  pb: '10px',
                  width: '280px',
                  background: 'linear-gradient(45deg, #9ccb3d, #81c7e4, #0e92cc)',
                  color: 'white',
                  '&:hover': { background: 'linear-gradient(45deg, #81c7e4, #9ccb3d, #0e92cc)' ,
                  },
                  textTransform: 'uppercase',
                  fontSize:'1rem',
                }}
                onClick={handleNavigate}
              >
                Book Appointment
              </Button>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
