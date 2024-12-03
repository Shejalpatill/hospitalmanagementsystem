import React, { useContext, useEffect } from "react";
import { MyContext } from "../../App";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  SvgIcon,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { IoClose } from "react-icons/io5";
import logo from "../../Assests/images/logo - Copy.png";

const SignIn = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    context.setIsHeaderFooterShow(false);
    return () => context.setIsHeaderFooterShow(true);
  }, [context]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f9f9f9",
        position: "relative",
      }}
    >
      {/* Shape Decoration */}
      <SvgIcon
        viewBox="0 0 1440 320"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "120px",
          zIndex: -1,
        }}
      >
        <path
          fill="#fff"
          d="M0,160L80,144C160,128,320,96,480,112C640,128,800,192,960,208C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </SvgIcon>

      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "#fff",
          boxShadow: 3,
          borderRadius: 2,
          p: 4,
          position: "relative",
        }}
      >
        <Button
          onClick={() => context.setIsHeaderFooterShow(true)}
          component={Link}
          to="/"
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            color: "inherit",
          }}
        >
          <IoClose size={24} />
        </Button>

        {/* Logo */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <img src={logo} alt="logo" style={{ width: "50%" }} />
        </Box>

        {/* Form */}
        <form>
          <Typography variant="h5" textAlign="center" gutterBottom>
            Sign In
          </Typography>

          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
          />

<Box>
            <Link to="/forgot-password" style={{ textDecoration: "none", color: "gray" ,"&:hover": { textDecoration: "underline" }}}>
              Forgot Password?
            </Link>
          </Box>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            sx={{ mt: 3 }}
          >
            Sign In
          </Button>
        </form>

        {/* Social Sign-in */}
        <Box sx={{ mt: 4, textAlign: "center" }}>
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

        {/* Sign Up Redirect */}
        <Box sx={{ mt: 3, textAlign: "center" }}>
          <Typography variant="body2">
            Don't have an account?{" "}
            <Typography
              component={Link}
              to="/signup"
              sx={{
                color: "primary.main",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Sign Up
            </Typography>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SignIn;
