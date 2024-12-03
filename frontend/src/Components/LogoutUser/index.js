import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // For navigation

const LogoutButton = () => {
  const navigate = useNavigate(); // Access React Router's navigate function

  const handleLogout = () => {
    // Clear the authentication token or any session data
    localStorage.removeItem('authToken'); // Example of clearing from localStorage
    sessionStorage.removeItem('authToken'); // Example for sessionStorage

    // Optionally, reset user state if using context or redux

    // Redirect to the login page after logout
    navigate('/login'); // Change this to your login route path
  };

  return (
    <Button 
      variant="contained" 
      color="secondary" 
      onClick={handleLogout}
      sx={{ marginTop: 2 }} // Add some margin if needed
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
