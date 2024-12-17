import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Container,
  Link,
  IconButton,
} from "@mui/material";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <Box sx={{ bgcolor: "#f8f9fa", pt: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Info Section */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                bgcolor: "#ffffff",
                p: 3,
                borderRadius: 2,
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Box
                component="img"
                src="https://storage.googleapis.com/a1aa/image/7t1lH8IXoPbjANbWWegbDKhYLAd8ehsZPx32n8lVfElMls2nA.jpg"
                alt="Contact Illustration"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                }}
              />
              <Typography variant="h5" sx={{ mt: 3, fontWeight: "bold" }}>
                Address
              </Typography>
              <Typography>NY State Thruway, New York, USA</Typography>

              <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
                Phone
              </Typography>
              <Typography>+129290122122</Typography>

              <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
                Email Address
              </Typography>
              <Typography>demo@demo.com</Typography>

              <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
                Website
              </Typography>
              <Typography>
                <Link href="https://redq.io" underline="hover" color="success">
                  https://redq.io
                </Link>
              </Typography>
              <Typography variant="h5" sx={{ mt: 2, fontWeight: "bold" }}>
                Follow Us
              </Typography>
              <Box sx={{ mt: 2 }}>
              <IconButton component="a" href="#" sx={{ '&:hover': { color: '#3b5998' } }}>
                <Facebook />
              </IconButton>
              <IconButton component="a" href="#" sx={{ '&:hover': { color: '#1da1f2' } }}>
                <Twitter />
              </IconButton>
              <IconButton component="a" href="#" sx={{ '&:hover': { color: '#e1306c' } }}>
                <Instagram />
              </IconButton>
            </Box>
            </Box>
          </Grid>

          {/* Contact Form Section */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                bgcolor: "#ffffff",
                p: 3,
                borderRadius: 2,
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
                How can we improve your experience?
              </Typography>
              <form>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Name"
                      placeholder="Name"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      placeholder="Email"
                      type="email"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
                <TextField
                  fullWidth
                  label="Subject"
                  placeholder="Subject"
                  variant="outlined"
                  sx={{ mb: 3 }}
                />
                <TextField
                  fullWidth
                  label="Description"
                  placeholder="Description"
                  multiline
                  rows={5}
                  variant="outlined"
                  sx={{ mb: 3 }}
                />
                <Button
                  variant="contained"
                  color="success"
                  type="submit"
                  sx={{
                    backgroundColor: "#28a745",
                    "&:hover": { backgroundColor: "#218838" },
                  }}
                >
                  Submit
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </Box>
  );
};

export default Contact;
