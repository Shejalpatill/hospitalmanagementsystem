import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import logo from "../../Assests/images/logo - Copy.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Box, Typography, IconButton } from "@mui/material";

const SignUp = () => {
  const context = useContext(MyContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    profilePhoto: null,
  });

  useEffect(() => {
    context.setIsHeaderFooterShow(false); // to hide header
    return () => context.setIsHeaderFooterShow(true); // to show header when unmounted
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profilePhoto: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here (validation, API call, etc.)
    console.log(formData);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", backgroundColor: "#f5f5f5", flexDirection: "column" }}>
      <Box sx={{ position: "relative", width: "100%", maxWidth: "500px", bgcolor: "white", p: 3, borderRadius: 2, boxShadow: 2 }}>
        <Link to="/">
          <IconButton
            onClick={() => context.setIsHeaderFooterShow(true)}
            sx={{
              position: "absolute", top: 5, right: 5, color: "#000",
              ":hover": { backgroundColor: "transparent" },
            }}
          >
            <IoClose />
          </IconButton>
        </Link>
        <Box sx={{ textAlign: "center", mb: 3 }}>
          <img src={logo} alt="logo" style={{ width: "50%" }} />
        </Box>
        <Typography variant="h5" align="center" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="standard"
              fullWidth
            />
            <TextField
              label="Phone No"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              variant="standard"
              fullWidth
            />
          </Box>
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            variant="standard"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            variant="standard"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            type="password"
            variant="standard"
            fullWidth
            sx={{ mb: 2 }}
          />
          <Box sx={{ mb: 2 }}>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ width: "100%" }}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Link to="/forgot-password" style={{ textDecoration: "none", color: "gray" ,"&:hover": { textDecoration: "underline" }}}>
              Forgot Password?
            </Link>
          </Box>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ mb: 2 }}
          >
            Sign Up
          </Button>
        </form>
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Or sign in with
          </Typography>
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            fullWidth
            sx={{ mb: 2 }}
          >
            Sign in with Google
          </Button>
          <Button
            variant="outlined"
            startIcon={<FacebookIcon />}
            fullWidth
            color="primary"
          >
            Sign in with Facebook
          </Button>
        </Box>
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="body2">
          Already have an account?{" "}
            <Typography
              component={Link}
              to="/signIn"
              sx={{
                color: "primary.main",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Sign In
            </Typography>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
