import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Box, 
  Typography, 
  Paper, 
  Avatar, 
  Container, 
  Grid, 
  Button,
  Divider 
} from '@mui/material';
import { Link } from 'react-router-dom';
import { logout } from '../features/authSlice';

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    window.location.href = '/';
  };

  if (!user) {
    return (
      <Container maxWidth="md" sx={{ mt: 12 }}>
        <Typography variant="h5" align="center">
          Please login to view your profile
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 12 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Avatar
              sx={{ 
                width: 120, 
                height: 120,
                bgcolor: 'green',
                fontSize: '3rem'
              }}
            >
              {user.username?.charAt(0).toUpperCase()}
            </Avatar>
          </Grid>
          
          <Grid item xs={12}>
            <Typography variant="h4" align="center" gutterBottom>
              {user.username}
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary">
              Member since {new Date(user.createdAt).toLocaleDateString()}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Divider sx={{ my: 2 }} />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" color="textSecondary">
              Email
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.email}
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" color="textSecondary">
              Phone
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.phone || 'Not provided'}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="subtitle1" color="textSecondary">
              Address
            </Typography>
            <Typography variant="body1" gutterBottom>
              {user.address || 'Not provided'}
            </Typography>
          </Grid>

          <Grid item xs={12} sx={{ mt: 3 }}>
            <Box display="flex" justifyContent="space-between">
              <Button
                component={Link}
                to="/edit-profile"
                variant="contained"
                sx={{ 
                  bgcolor: 'green',
                  '&:hover': {
                    bgcolor: 'darkgreen',
                  }
                }}
              >
                Edit Profile
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default UserProfile;