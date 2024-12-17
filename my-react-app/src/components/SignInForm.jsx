import React, { useState } from "react";
import { TextField, Button, Typography, Box, Divider, IconButton, InputAdornment } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Visibility, VisibilityOff, Google, MobileFriendly } from "@mui/icons-material";
import MyImage from "../images/Logo-new.webp";
import { useDispatch } from 'react-redux';
import { signIn } from '../features/authSlice';

const SignIn = ({ onClose, onSuccessfulAuth }) => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(signIn(values)).unwrap();
      onSuccessfulAuth();
      onClose();
    } catch (error) {
      console.error("Sign in error:", error);
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
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        width: '550px',
        border: 'none',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "#f8f9fa"
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

        <Formik
          initialValues={initialValues}
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
                variant="outlined"
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
                variant="outlined"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
                <a href="#" style={{ textDecoration: "none", fontSize: "0.875rem" }}>
                  Forgot password?
                </a>
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
            </Form>
          )}
        </Formik>

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
          Don't have any account?{" "}
          <a href="#" style={{ textDecoration: "none", color: "#28a745" }}>
            Register
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignIn;
