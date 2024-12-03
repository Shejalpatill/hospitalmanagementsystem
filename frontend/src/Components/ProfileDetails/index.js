import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Avatar, Typography, Box } from "@mui/material";

const ProfileDetails = ({ open, handleClose, userData }) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Profile</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: 2 }}>
          <Avatar
            alt={userData?.name || "User Name"}
            src={userData?.photo || "/static/images/avatar/2.jpg"}
            sx={{ width: 100, height: 100, marginBottom: 2 }}
          />
          <Typography variant="h6">{userData?.name || "John Doe"}</Typography>
          <Typography variant="body1">{userData?.email || "Email not available"}</Typography>
          <Typography variant="body1">{userData?.phoneNumber || "Phone number not available"}</Typography>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Total Appointments: {userData?.appointments?.length || 0}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProfileDetails;
