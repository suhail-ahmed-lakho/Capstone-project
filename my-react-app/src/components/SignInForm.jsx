import React, { useState } from "react";
import { TextField, Button, Typography, Box, Divider, IconButton, InputAdornment, Alert } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Visibility, VisibilityOff, Google, MobileFriendly } from "@mui/icons-material";
import MyImage from "../images/Logo-new.webp";
import { useDispatch } from 'react-redux';
import { signIn } from '../features/authSlice';

const SignIn = ({ onClose, onSuccessfulAuth, onSwitchToSignUp }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const dispatch = useDispatch();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(u => u.email === values.email && u.password === values.password);

      if (user) {
        dispatch(signIn(user));
        setLoginError(null);
        onSuccessfulAuth();
        onClose();
        alert('Login successful!');
      } else {
        setLoginError('Invalid email or password');
      }
    } catch (error) {
      setLoginError('Login failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: 3,
        borderRadius: 2,
        width: '550px',
        border: 'none',
      }}
    >
      <Box>
        <Box textAlign="center" mb={2}>
          <Box
            component="img"
            src={MyImage}
            alt="PickBazar logo"
            sx={{ height: 30, mb: 2 }}
          />
          <Typography variant="body2">Login with your email & password</Typography>
        </Box>

        {loginError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {loginError}
          </Alert>
        )}

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, handleChange, handleBlur, isSubmitting }) => (
            <Form>
              <TextField
                fullWidth
                id="email"
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
                id="password"
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
                      <IconButton onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
                  Forgot password?
                </Typography>
              </Box>

              <Button
                fullWidth
                variant="contained"
                color="success"
                type="submit"
                sx={{ mt: 2, mb: 1 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </Button>

              <Divider sx={{ my: 2 }}>Or</Divider>

              <Button
                fullWidth
                variant="contained"
                startIcon={<Google />}
                sx={{ mb: 1, bgcolor: "#4285F4", "&:hover": { bgcolor: "#357ae8" } }}
              >
                Login with Google
              </Button>

              <Button
                fullWidth
                variant="contained"
                startIcon={<MobileFriendly />}
                sx={{ mb: 2, bgcolor: "#6c757d", "&:hover": { bgcolor: "#5a6268" } }}
              >
                Login with Mobile number
              </Button>

              <Typography variant="body2" align="center">
                Don't have an account?{" "}
                <Typography
                  component="span"
                  color="primary"
                  sx={{ cursor: 'pointer', color: 'green' }}
                  onClick={onSwitchToSignUp}
                >
                  Register
                </Typography>
              </Typography>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default SignIn;