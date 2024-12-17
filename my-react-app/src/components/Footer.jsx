import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  TextField,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram, ArrowForward } from "@mui/icons-material";
import MyImage from "../images/Logo-new.webp"

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#ffffff", py: 5, mt: 5, color: "#343a40", boxShadow: 2 }}>
      <Container>
        <Grid container spacing={4}>
          {/* Logo and Contact Information */}
          <Grid item xs={12} md={3}>
            <Box
              component="img"
              src={MyImage}
              alt="PickBazar logo"
              sx={{ height: 30, mb: 2 }}
            />
            <Typography>NY State Thruway, New York, USA</Typography>
            <Typography>demo@demo.com</Typography>
            <Typography>+129290122122</Typography>
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
          </Grid>

          {/* Explore Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Explore</Typography>
            <Box>
              <Link href="#" underline="hover" color="inherit" sx={{ '&:hover': { color: '#ffc107' } }}>
                Shops
              </Link>
              <br />
              <Link href="#" underline="hover" color="inherit" sx={{ '&:hover': { color: '#ffc107' } }}>
                Authors
              </Link>
              <br />
              <Link href="#" underline="hover" color="inherit" sx={{ '&:hover': { color: '#ffc107' } }}>
                Flash Deals
              </Link>
              <br />
              <Link href="#" underline="hover" color="inherit" sx={{ '&:hover': { color: '#ffc107' } }}>
                Coupon
              </Link>
            </Box>
          </Grid>

          {/* Customer Service Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6">Customer Service</Typography>
            <Box>
              <Link href="#" underline="hover" color="inherit">
                FAQ & Helps
              </Link>
              <br />
              <Link href="#" underline="hover" color="inherit">
                Vendor Refund Policies
              </Link>
              <br />
              <Link href="#" underline="hover" color="inherit">
                Customer Refund Policies
              </Link>
            </Box>
          </Grid>

          {/* Our Information Section */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6">Our Information</Typography>
            <Box>
              <Link href="#" underline="hover" color="inherit">
                Manufacturers
              </Link>
              <br />
              <Link href="#" underline="hover" color="inherit">
                Privacy Policies
              </Link>
              <br />
              <Link href="#" underline="hover" color="inherit">
                Terms & Conditions
              </Link>
              <br />
              <Link href="#" underline="hover" color="inherit">
                Contact Us
              </Link>
            </Box>
          </Grid>

          {/* Subscribe Now Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6">Subscribe Now</Typography>
            <Typography>
              Subscribe your email for newsletter and featured news based on
              your interest
            </Typography>
            <Box sx={{ mt: 2, display: "flex" }}>
              <TextField
                variant="outlined"
                placeholder="Write your email here"
                size="small"
                fullWidth
                sx={{ mr: 1 }}
              />
              <IconButton color="primary">
                <ArrowForward />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ mt: 5, textAlign: "start" }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            ©2024 Pickbazar. Copyright © REDQ. All rights reserved worldwide.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
