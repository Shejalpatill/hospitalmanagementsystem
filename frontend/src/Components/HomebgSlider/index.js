import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './HomePageSlider.css';
import image1 from './assets/images/image1.jpg';
import image2 from './assets/images/image2.jpg';
import image3 from './assets/images/image3.jpg';
import image4 from './assets/images/image4.jpg';


const ImageSlider = () => {
  const images = [image1, image2, image3, image4];

  const settings = {
    dots: false, // No dots for a cleaner background
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hide arrows for fullscreen effect
    fade: true, // Smooth fade effect for transitions
  };

  return (
    <Box className="slider-background">
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            className="slider-image"
            sx={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100vh',
            }}
          />
        ))}
      </Slider>
      <Box className="overlay-content">
        <Typography
          variant="h3"
          sx={{
            color: 'white',
            textShadow: '0 2px 4px rgba(0,0,0,0.6)',
            textAlign: 'center',
          }}
        >
          Welcome to Our Homepage
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageSlider;
