import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  Divider,
  InputAdornment,
} from "@mui/material";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [contactNumber, setContactNumber] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");

  const subtotal = cartItems.reduce(
    (total, item) =>
      total + parseFloat(item.price.replace("$", "")) * item.quantity,
    0
  );

  return (
    <Box
      sx={{
        mt: "",
        pt: 5,
        minHeight: "100vh",
        bgcolor: "#f8f9fa",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Left Side - Forms */}
          <Grid item xs={12} md={8}>
            {/* Contact Section */}
            <Paper
              elevation={0}
              sx={{
                p: 3,
                mb: 3,
                borderRadius: 2,
                border: "1px solid #e0e0e0",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    bgcolor: "rgba(0, 128, 0, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "green",
                  }}
                >
                  <FontAwesomeIcon icon={faPhone} />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Contact Number
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    We'll use this number for order updates
                  </Typography>
                </Box>
              </Box>
              <TextField
                fullWidth
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="Enter your phone number"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">+1</InputAdornment>
                  ),
                }}
              />
            </Paper>

            {/* Billing Address */}
            <Paper
              elevation={0}
              sx={{
                p: 3,
                mb: 3,
                borderRadius: 2,
                border: "1px solid #e0e0e0",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    bgcolor: "rgba(0, 128, 0, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "green",
                  }}
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Billing Address
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Where should we send the invoice?
                  </Typography>
                </Box>
              </Box>
              <TextField
                fullWidth
                multiline
                rows={3}
                value={billingAddress}
                onChange={(e) => setBillingAddress(e.target.value)}
                placeholder="Enter your billing address"
                variant="outlined"
              />
            </Paper>
            {/* Delivery Schedule Section */}
            <Paper
              elevation={0}
              sx={{
                p: 3,
                mb: 3,
                borderRadius: 2,
                border: "1px solid #e0e0e0",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    bgcolor: "rgba(0, 128, 0, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "green",
                  }}
                >
                  <FontAwesomeIcon icon={faClock} />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Delivery Schedule
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Choose your preferred delivery time
                  </Typography>
                </Box>
              </Box>

              <Grid container spacing={2}>
                {/* Date Selection */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    value={deliveryDate}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                    variant="outlined"
                    label="Delivery Date"
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option value="">Select Date</option>
                    <option value="today">Today</option>
                    <option value="tomorrow">Tomorrow</option>
                    <option value="day-after">Day After Tomorrow</option>
                  </TextField>
                </Grid>

                {/* Time Slot Selection */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    select
                    fullWidth
                    value={deliveryTime}
                    onChange={(e) => setDeliveryTime(e.target.value)}
                    variant="outlined"
                    label="Time Slot"
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option value="">Select Time</option>
                    <option value="8-10">8:00 AM - 10:00 AM</option>
                    <option value="10-12">10:00 AM - 12:00 PM</option>
                    <option value="12-2">12:00 PM - 2:00 PM</option>
                    <option value="2-4">2:00 PM - 4:00 PM</option>
                    <option value="4-6">4:00 PM - 6:00 PM</option>
                  </TextField>
                </Grid>
              </Grid>
            </Paper>

            {/* Shipping Address */}
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 2,
                border: "1px solid #e0e0e0",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    bgcolor: "rgba(0, 128, 0, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "green",
                  }}
                >
                  <FontAwesomeIcon icon={faTruck} />
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Shipping Address
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Where should we deliver your order?
                  </Typography>
                </Box>
              </Box>
              <TextField
                fullWidth
                multiline
                rows={3}
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                placeholder="Enter your shipping address"
                variant="outlined"
              />
            </Paper>
          </Grid>

          {/* Right Side - Order Summary */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={0}
              sx={{
                p: 3,
                borderRadius: 2,
                border: "1px solid #e0e0e0",
                position: "sticky",
                top: 84,
              }}
            >
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Order Summary
              </Typography>

              {cartItems.map((item) => (
                <Box key={item.id} sx={{ mb: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 1,
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography sx={{ color: "green", fontWeight: 500 }}>
                        {item.quantity}x
                      </Typography>
                      <Typography>{item.label}</Typography>
                    </Box>
                    <Typography sx={{ fontWeight: 500 }}>
                      $
                      {(
                        item.quantity * parseFloat(item.price.replace("$", ""))
                      ).toFixed(2)}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {item.weight}
                  </Typography>
                </Box>
              ))}

              <Divider sx={{ my: 3 }} />

              <Box sx={{ mb: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography>Subtotal</Typography>
                  <Typography sx={{ fontWeight: 500 }}>
                    ${subtotal.toFixed(2)}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography>Tax</Typography>
                  <Typography color="text.secondary">
                    Calculated at checkout
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>Shipping</Typography>
                  <Typography color="text.secondary">
                    Calculated at checkout
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  mt: 3,
                  bgcolor: "green",
                  py: 1.5,
                  fontSize: "1.1rem",
                  "&:hover": {
                    bgcolor: "darkgreen",
                  },
                }}
              >
                Place Order
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Checkout;
