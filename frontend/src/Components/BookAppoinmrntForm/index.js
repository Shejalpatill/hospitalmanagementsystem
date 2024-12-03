import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, Container, Grid, MenuItem, FormControl, InputLabel, Select, FormControlLabel, Checkbox } from '@mui/material';
import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { LocalizationProvider, DatePicker, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
const BookAppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    message: '',
    doctor: '',
    date: null,
    time: null,
    communication: '',
    reason: '',
    termsAccepted: false,
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phone: false,
    age: false,
    gender: false,
    doctor: false,
    date: false,
    time: false,
    communication: false,
    reason: false,
    termsAccepted: false,
  });

  const [availableDoctors, setAvailableDoctors] = useState([]);

  useEffect(() => {
    // Mocked data for available doctors
    setAvailableDoctors([
      { id: 1, name: 'Dr. Smith' },
      { id: 2, name: 'Dr. Johnson' },
      { id: 3, name: 'Dr. Williams' },
    ]);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
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
      age: !formData.age || formData.age < 1 || formData.age > 120,
      gender: !formData.gender,
      doctor: !formData.doctor,
      date: !formData.date,
      time: !formData.time,
      communication: !formData.communication,
      reason: formData.reason.trim() === '',
      termsAccepted: !formData.termsAccepted,
    };

    setErrors(newErrors);

    // If no errors, submit form
    if (!Object.values(newErrors).some((error) => error)) {
      console.log(formData);
      alert('Form submitted successfully!');
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container
        maxWidth="lg"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'auto', flexDirection: 'column' }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            mt: 5,
            mb: 6,
            background: '#fff',
            borderRadius: 2,
            boxShadow: 4,
            p: 3,
            width: '100%',
            maxWidth: 900,
          }}
        >
          <Typography variant="h5" align="center" sx={{ mb: 4, fontWeight: '600' }}>
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
                helperText={errors.name && 'Name is required'}
                InputProps={{
                  startAdornment: (
                    <FaUser style={{ marginRight: '8px' }} />
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
                error={errors.phone}
                helperText={errors.phone && 'Enter a valid 10-digit phone number'}
                InputProps={{
                  startAdornment: (
                    <FaPhoneAlt style={{ marginRight: '8px' }} />
                  ),
                }}
              />
            </Grid>

            {/* Email Field */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                helperText={errors.email && 'Enter a valid email address'}
                InputProps={{
                  startAdornment: (
                    <MdEmail style={{ marginRight: '8px' }} />
                  ),
                }}
              />
            </Grid>

            {/* Doctor Selection Field */}
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={errors.doctor}>
                <InputLabel>Doctor</InputLabel>
                <Select name="doctor" value={formData.doctor} onChange={handleChange} label="Doctor">
                  {availableDoctors.map((doctor) => (
                    <MenuItem key={doctor.id} value={doctor.id}>
                      {doctor.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Date Picker */}
            <Grid item xs={12} sm={6}>
              <DatePicker
                label="Select Date"
                value={formData.date}
                onChange={(newValue) => setFormData({ ...formData, date: newValue })}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    error={errors.date}
                    helperText={errors.date && 'Select a valid date'}
                  />
                )}
              />
            </Grid>

            {/* Time Picker */}
            <Grid item xs={12} sm={6}>
              <TimePicker
                label="Select Time"
                value={formData.time}
                onChange={(newValue) => setFormData({ ...formData, time: newValue })}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    error={errors.time}
                    helperText={errors.time && 'Select a valid time'}
                  />
                )}
              />
            </Grid>

            {/* Reason for Appointment */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Reason for Appointment"
                variant="outlined"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                error={errors.reason}
                helperText={errors.reason && 'Please provide a reason for the appointment'}
                multiline
                rows={3}
              />
            </Grid>

            {/* Terms and Conditions */}
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    name="termsAccepted"
                  />
                }
                label="I agree to the terms and conditions"
              />
            </Grid>
          </Grid>

          {/* Submit Button */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                width:'550px',
                background: 'linear-gradient(45deg, #9ccb3d, #81c7e4, #0e92cc)',
                color: 'white',
                '&:hover': { background: 'linear-gradient(45deg, #81c7e4, #9ccb3d, #0e92cc)' },
                fontWeight: '700',
                textTransform: 'uppercase',
                p: 1,
                fontSize: '1.3rem',
                borderRadius: '20px',
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </LocalizationProvider>
  );
};

export default BookAppointmentForm;
