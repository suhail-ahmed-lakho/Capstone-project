import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import MyImage from "../images/Logo-new.webp";
import {
  Typography,
  TextField,
  Button,
  Box,
  Link,
  Card,
  CardContent,
  InputAdornment,
  IconButton,
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
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await dispatch(signUp(values)).unwrap();
      onSuccessfulAuth();
      onClose();
    } catch (error) {
      console.error("Sign up error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card
      sx={{
        width: "550px",
        margin: "auto",
        borderRadius: 2,
        border: "none",
        padding: "10px",
      }}
    >
      <CardContent>
        <Box className="d-flex justify-content-center align-items-center flex-column mb-4">
          <img src={MyImage} alt="" sx={{ height: "30", align: "center" }} className="mb-3" />
          <Typography variant="body1" gutterBottom align="center">
            By signing up, you <span className="text-success">agree</span> to <span className="text-success">our terms & policy</span>
          </Typography>
        </Box>
      
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={SignUpSchema}
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
                label="Password"
                type={showPassword ? "text" : "password"}
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
                sx={{ mb: 2 }}
              >
                Sign Up
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
                <Link href="#" onClick={onSwitchToSignIn} underline="hover">
                  Sign In
                </Link>
              </Typography>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
};

export default SignUpForm;
