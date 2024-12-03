import React from 'react';
import { Box, Typography } from '@mui/material';
import AppointmentForm from '../../Components/AppoinmentForm';
import Rating from '../../Components/Rating';
import ExpertDoctorsSwiper from '../../Components/ExpertDoctorsSwiper';
import CardiologyTreatments from '../../Components/TreatmentProcesure';
import HomeServiceContent from '../../Components/Homeservicecontent';
import WhyChooseUs from '../../Components/WhyChooseUs';

const Home = () => {
  return (
    <>
      <Box className="home-page container">
        <Box className="content">
          <Typography variant="h4" className="headline">
            Cardiology
          </Typography>
          <Typography variant="h6" className="subtext-1">
            Get the Right Care <br />
            At the Right Time!
          </Typography>
          <Typography variant="h6" className="subtext-2">
            From Best <b>Hospital</b>
            <br />HeartCare in Pune.
          </Typography>
        </Box>
      </Box>

      {/* Wrapping AppointmentForm with Box */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }} className='homeForm'>
        <AppointmentForm />
      </Box>
      <Rating/>
      <div>
     
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
       <ExpertDoctorsSwiper/>
      </Box>
      <CardiologyTreatments />
      <HomeServiceContent/>
      <WhyChooseUs/>
    </>
  );
};

export default Home;
