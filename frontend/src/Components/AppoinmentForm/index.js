import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container, Grid, InputAdornment } from '@mui/material';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Reset validation on change
    setErrors({ ...errors, [name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^\d{10}$/;

    const newErrors = {
      name: formData.name.trim() === '',
      email: !emailRegex.test(formData.email),
      phone: !phoneRegex.test(formData.phone),
    };

    setErrors(newErrors);

    // If no errors, submit form
    if (!Object.values(newErrors).some((error) => error)) {
      console.log(formData);
      alert('Form submitted successfully!');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}} className="appoinmentForm">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          mt:5,
          mb:6,
          background: '#fff',
          borderRadius: 2,
          boxShadow: 4,
          p: 3,
          width: '100%',
          maxWidth: 800,
        }}
      >
        <Typography variant="h5" align="center" sx={{ mb: 4, fontWeight: "600" }}>
          Book Your Appointment
        </Typography>

        <Grid container spacing={2}>
          {/* Name Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              helperText={errors.name && "Name is required"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaUser />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Phone Field */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Phone"
              variant="outlined"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              error={errors.phone}
              helperText={errors.phone && "Enter a valid 10-digit phone number"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaPhoneAlt />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          </Grid>
          {/* Email Field */}
          <Grid item xs={12} sm={6} sx={{pt:2}}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              error={errors.email}
              helperText={errors.email && "Enter a valid email address"}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <MdEmail />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          {/* Message Field */}
          <Grid item xs={12} sm={6} sx={{pt:2}}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              multiline
              rows={1}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FaMessage />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
             background: 'linear-gradient(45deg, #9ccb3d, #81c7e4, #0e92cc)',
            color: 'white',
            '&:hover': { background: 'linear-gradient(45deg, #81c7e4, #9ccb3d, #0e92cc)' ,
            },
            mt: 2,
            fontWeight: '700',
            textTransform: 'uppercase',
            p: 1,
            fontSize:'1.3rem',
            borderRadius:'15px',
          }}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default AppointmentForm;
