import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Box, Typography, Grid } from '@mui/material';

export default function RatingSize() {
  const stats = [
    { label: 'Happy Patients', value: '9M+' },
    { label: 'Surgeries', value: '12K+' },
    { label: 'Hospitals', value: '20+' },
    { label: 'Doctors', value: '23+' },
  ];

  return (
    <Box 
      sx={{
        padding: '2.5rem 0rem',
        textAlign: 'center',
        mt: 24,
        backgroundColor:'#f7f7f7',
      }}
      className="container"
    >
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{
          flexDirection: { xs: 'column', sm: 'row' }, // Column for small, row for medium+
        }}
      >
        {/* Stats Section */}
        <Grid item xs={12} sm={12} lg={8}>
          <Box>
            <Grid container spacing={0} justifyContent="center">
              {stats.map((stat, index) => (
                <Grid item xs={6} sm={3} key={index}  className='rating'>
                  <Typography variant="h3" color="#0e92cc" fontWeight="bold">
                    {stat.value}
                  </Typography>
                  <Typography variant="body1" color="#282727" sx={{fontWeight:"500"}}>
                    {stat.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>

        {/* Vertical Line */}
        <Grid
          item
          sx={{
            display: { xs: 'none', sm: 'block' }, // Hide vertical line on small screens
          }}
        >
          <Box
            sx={{
              width: '2px',
              height: '100%',
              margin: '0 auto',
            }}
          />
        </Grid>

        {/* Rating Section */}
        <Grid item xs={12} sm={12} lg={3}>
          <Box className="rateValue">
            <Stack spacing={1} justifyContent="center" alignItems="center">
              <Rating name="size-large" defaultValue={5} size="large" />
            </Stack>
            <Typography variant="body1" gutterBottom sx={{pt:1 , pl:2}}>
              1400+ Reviews
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
