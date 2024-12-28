import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import MyImage from "../images/Logo-new.webp";
import {
  Typography,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  InputAdornment,
  IconButton,
  Alert,
} from "@mui/material";
import { Google as GoogleIcon, Visibility, VisibilityOff } from "@mui/icons-material";
import { styled } from "@mui/system";
import { useDispatch } from 'react-redux';
import { signUp } from '../features/authSlice';

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const SignUpSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const SignUpForm = ({ onClose, onSwitchToSignIn, onSuccessfulAuth }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [signUpError, setSignUpError] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      
      // Check if email already exists
      if (existingUsers.some(user => user.email === values.email)) {
        setSignUpError('Email already exists');
        return;
      }

      // Create new user object
      const newUser = {
        id: Date.now(),
        username: values.name,
        email: values.email,
        password: values.password,
        createdAt: new Date().toISOString()
      };

      // Save to localStorage
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem('users', JSON.stringify(updatedUsers));

      // Update Redux state
      dispatch(signUp(newUser));
      setSignUpError(null);
      
      // Show success message and switch to login
      alert('Registration successful! Please login to continue.');
      onSwitchToSignIn();
      
    } catch (error) {
      setSignUpError('Registration failed. Please try again.');
      console.error('Sign up error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card sx={{ width: "550px", margin: "auto", borderRadius: 2, border: "none", padding: "10px" }}>
      <CardContent>
        <Box className="d-flex justify-content-center align-items-center flex-column mb-4">
          <img src={MyImage} alt="" style={{ height: "30px", marginBottom: "16px" }} />
          <Typography variant="body1" gutterBottom align="center">
            By signing up, you <span style={{ color: 'green' }}>agree</span> to{" "}
            <span style={{ color: 'green' }}>our terms & policy</span>
          </Typography>
        </Box>

        {signUpError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {signUpError}
          </Alert>
        )}

        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={SignUpSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting, handleChange, handleBlur, values }) => (
            <Form>
              <TextField
                fullWidth
                name="name"
                label="Full Name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
                margin="normal"
              />

              <TextField
                fullWidth
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
                margin="normal"
              />

              <TextField
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                margin="normal"
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
                fullWidth
                type="submit"
                variant="contained"
                color="success"
                disabled={isSubmitting}
                sx={{ mt: 2, mb: 2 }}
              >
                {isSubmitting ? "Creating Account..." : "Register"}
              </Button>

              <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{ mb: 2 }}
              >
                Sign up with Google
              </Button>

              <Typography variant="body2" align="center">
                Already have an account?{" "}
                <Typography
                  component="span"
                  sx={{ cursor: 'pointer', color: 'green' }}
                  onClick={onSwitchToSignIn}
                >
                  Sign In
                </Typography>
              </Typography>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;