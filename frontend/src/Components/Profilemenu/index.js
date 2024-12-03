import React, { useState, useContext } from "react";
import { Box, IconButton, Avatar, Menu, MenuItem, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import ProfileDetails from "../ProfileDetails";

const ProfileMenu = () => {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [openProfileModal, setOpenProfileModal] = useState(false); // Modal open state

  const navigate = useNavigate();
  const { userData, setUserData } = useContext(MyContext);

  const settings = [
    { label: "Profile", path: "/profile" },
    { label: "Book Appointment", path: "/appointment" },
    { label: "History", path: "/history" },
    { label: "Login", path: "/signIn" },
    { label: "Logout" },
    
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenProfileModal = () => {
    setOpenProfileModal(true);
  };

  const handleCloseProfileModal = () => {
    setOpenProfileModal(false); 
  };

  const handleMenuClick = () => {
    navigate("/signIn");
    handleCloseUserMenu();
  };

  const handleLogout = () => {
    // Remove user data from localStorage or sessionStorage
    localStorage.removeItem("authToken"); // Or sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");

    // Clear user data from context (if used)
    setUserData(null); // Reset user data

    // Navigate to login page
    navigate("/signIn");
    handleCloseUserMenu();
  };

  return (
    <Box  sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%',p:0,m:0 }}>
      <Tooltip title="Open settings" sx={{p:0,m:0}}>
        <IconButton onClick={handleOpenUserMenu}>
          <Avatar alt={userData?.name || "User Name"} src={userData?.photo || "/static/images/avatar/2.jpg"} sx={{ width: 50, height: 50 }} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        sx={{ mt: "30px"}}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting.label}
            onClick={() => {
              if (setting.label === "Profile") {
                handleOpenProfileModal(); 
              } else {
                handleMenuClick(setting.path);
              }
            }}
          >
            {setting.label}
          </MenuItem>
        ))}
      </Menu>

      {/* Profile Modal */}
      <ProfileDetails open={openProfileModal} handleClose={handleCloseProfileModal} userData={userData} />
    </Box>
  );
};

export default ProfileMenu;
