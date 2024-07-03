import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, Avatar, ListItemIcon, Typography, Divider } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../style.css'

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profilePicture, setProfilePicture] = useState(localStorage.getItem('profilePicture') || '');
  const [imagePreview, setImagePreview] = useState(profilePicture);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        localStorage.setItem('profilePicture', reader.result);
      };
      reader.readAsDataURL(file);
      setProfilePicture(file);
    }
  };

  return (
    <div className='SUserMenu'>
      <IconButton onClick={handleMenuOpen}>
        <Avatar src={imagePreview} />
        <ArrowDropDownIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <div className="profile-section">
          <Avatar src={imagePreview} className="profile-picture" />
          <input
            accept="image/*"
            
            id="profile-image-upload"
            type="file"
            onChange={handleImageChange}
          />
          <label htmlFor="profile-image-upload">
            <IconButton component="span">
              <EditIcon />
            </IconButton>
          </label>
        </div>
        <Divider />
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Se déconnecter</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
