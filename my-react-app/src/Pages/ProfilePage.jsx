import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  Typography,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  InputAdornment,
  IconButton,
  Avatar,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { styled } from '@mui/system';
import { updateUser } from '../features/authSlice';

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const ProfileSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .nullable(),
});

const ProfilePage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user?.currentUser);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(updateUser(values)).unwrap();
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Profile update error:', error);
      alert('Failed to update profile. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!currentUser) {
    return <Typography>Please log in to view your profile.</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
            <Avatar
              sx={{ width: 100, height: 100, mb: 2 }}
              alt={currentUser.name}
              src="/placeholder.svg?height=100&width=100"
            />
            <Typography variant="h4" gutterBottom>
              Edit Profile
            </Typography>
          </Box>
          <Formik
            initialValues={{
              name: currentUser.name || '',
              email: currentUser.email || '',
              password: '',
            }}
            validationSchema={ProfileSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <Field
                  as={StyledTextField}
                  name="name"
                  label="Full Name"
                  fullWidth
                  error={touched.name && errors.name}
                  helperText={touched.name && errors.name}
                />
                <Field
                  as={StyledTextField}
                  name="email"
                  label="Email"
                  fullWidth
                  error={touched.email && errors.email}
                  helperText={touched.email && errors.email}
                />
                <Field
                  as={StyledTextField}
                  name="password"
                  label="New Password (optional)"
                  type={showPassword ? 'text' : 'password'}
                  fullWidth
                  error={touched.password && errors.password}
                  helperText={touched.password && errors.password}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
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
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  sx={{ mt: 2 }}
                >
                  Update Profile
                </Button>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfilePage;

