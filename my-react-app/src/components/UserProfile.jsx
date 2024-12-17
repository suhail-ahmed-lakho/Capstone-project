import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfile } from '../features/authSlice';
import { Box, TextField, Button, Typography, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  maxWidth: 400,
  margin: '0 auto',
}));

const UserProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [image, setImage] = useState(user?.image || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ name, email, image }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Edit Profile
      </Typography>
      <StyledForm onSubmit={handleSubmit}>
        <Avatar
          src={image}
          alt={name}
          sx={{ width: 100, height: 100, margin: '0 auto' }}
        />
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="raised-button-file"
          type="file"
          onChange={handleImageChange}
        />
        <label htmlFor="raised-button-file">
          <Button variant="contained" component="span">
            Upload Image
          </Button>
        </label>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Save Changes
        </Button>
      </StyledForm>
    </Box>
  );
};

export default UserProfile;
