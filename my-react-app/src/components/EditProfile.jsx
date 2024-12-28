import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Container,
  Avatar,
  Alert,
  IconButton,
  InputAdornment
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { updateProfile } from '../features/authSlice';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  username: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string(),
  address: Yup.string(),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .nullable(),
});

const EditProfile = () => {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [updateMessage, setUpdateMessage] = useState({ type: '', message: '' });

  if (!user) {
    return (
      <Container maxWidth="sm" sx={{ mt: 12 }}>
        <Typography>Please login to edit your profile.</Typography>
      </Container>
    );
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const updatedData = {
        ...values,
        id: user.id,
        createdAt: user.createdAt
      };

      // If password is empty, don't update it
      if (!values.password) {
        delete updatedData.password;
      }

      await dispatch(updateProfile(updatedData));
      setUpdateMessage({
        type: 'success',
        message: 'Profile updated successfully!'
      });

      // Redirect to profile page after 2 seconds
      setTimeout(() => {
        navigate('/profile');
      }, 2000);

    } catch (error) {
      setUpdateMessage({
        type: 'error',
        message: 'Failed to update profile. Please try again.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 12 }}>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <Avatar
            sx={{
              width: 100,
              height: 100,
              mb: 2,
              bgcolor: 'green',
              fontSize: '2.5rem'
            }}
          >
            {user.username?.charAt(0).toUpperCase()}
          </Avatar>
          
          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            Edit Profile
          </Typography>

          {updateMessage.message && (
            <Alert severity={updateMessage.type} sx={{ width: '100%', mb: 2 }}>
              {updateMessage.message}
            </Alert>
          )}

          <Formik
            initialValues={{
              username: user.username || '',
              email: user.email || '',
              phone: user.phone || '',
              address: user.address || '',
              password: ''
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
              <Form style={{ width: '100%' }}>
                <TextField
                  margin="normal"
                  fullWidth
                  name="username"
                  label="Username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                />
                
                <TextField
                  margin="normal"
                  fullWidth
                  name="email"
                  label="Email Address"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />

                <TextField
                  margin="normal"
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
                />

                <TextField
                  margin="normal"
                  fullWidth
                  name="address"
                  label="Address"
                  multiline
                  rows={3}
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.address && Boolean(errors.address)}
                  helperText={touched.address && errors.address}
                />

                <TextField
                  margin="normal"
                  fullWidth
                  name="password"
                  label="New Password (optional)"
                  type={showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{
                    mt: 3,
                    mb: 2,
                    bgcolor: 'green',
                    '&:hover': {
                      bgcolor: 'darkgreen',
                    }
                  }}
                >
                  {isSubmitting ? 'Saving...' : 'Save Changes'}
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Paper>
    </Container>
  );
};

export default EditProfile;