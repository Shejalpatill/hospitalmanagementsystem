import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    // Normally here, you'd make an API call to send a password reset link
    // For example:
    // resetPassword(email)
    //   .then(() => {
    //     setMessage("Password reset link sent! Please check your email.");
    //   })
    //   .catch(() => {
    //     setMessage("An error occurred. Please try again.");
    //   });

    // Simulate success for this example
    setMessage("Password reset link sent! Please check your email.");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f5f5f5", flexDirection: "column" }}>
      <Box sx={{ position: "relative", width: "100%", maxWidth: "500px", bgcolor: "white", p: 3, borderRadius: 2, boxShadow: 2 }}>
        <Link to="/">
          <Button sx={{ position: "absolute", top: 5, right: 5, color: "#000" }}>
            Close
          </Button>
        </Link>
        <Typography variant="h5" align="center" gutterBottom>
          Forgot Password
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Enter your email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            type="email"
            variant="standard"
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth sx={{ mb: 2 }}>
            Send Reset Link
          </Button>
        </form>
        {message && (
          <Typography variant="body2" align="center" sx={{ color: message.includes("sent") ? "green" : "red" }}>
            {message}
          </Typography>
        )}
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Typography variant="body2">
            Remember your password?{" "}
            <Link to="/signin" style={{ textDecoration: "none", fontWeight: "bold" }}>
              Sign In
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
