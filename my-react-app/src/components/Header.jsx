import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Drawer, Modal } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import AccountCircle from '@mui/icons-material/AccountCircle';

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/cartSlice";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import MyImage from "../images/Logo-new.webp";
import LocalDining from "@mui/icons-material/LocalDining";
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: 400,
  },
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
};

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [signUpAnchorEl, setSignUpAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleSignUpOpen = () => {
    setIsSignUp(true);
    setOpen(true);
  };

  const handleSignInOpen = () => {
    setIsSignUp(false);
    setOpen(true);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSuccessfulAuth = () => {
    setIsAuthenticated(true);
    handleClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.slice(1)); // Remove the dollar sign and convert to float
    return total + price * item.quantity;
  }, 0);

  const handleBuyNow = () => {
    // Placeholder for buy now functionality
    console.log("Proceeding to checkout...");
    // You can redirect to a checkout page or open a payment modal here
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/home"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <img
              src={MyImage}
              alt="PickBazar logo"
              className="img-fluid"
              style={{ height: "30px", marginRight: "10px" }}
            />
          </Typography>

          <Box
            className="dropdown"
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: "8px",
              padding: "5px 10px",
              marginLeft: "20px",
              marginTop: "10px",
            }}
          >
            <Typography
              variant="body1"
              className="btn bg-transparent border dropdown-toggle m-0 ms-2"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <LocalDining sx={{ color: "green", marginRight: 1 }} />
              Grocery
            </Typography>

            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  <LocalDining sx={{ marginRight: 1 }} /> Grocery
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <LocalDining sx={{ marginRight: 1 }} /> Bakery
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <LocalDining sx={{ marginRight: 1 }} /> Makeup
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <LocalDining sx={{ marginRight: 1 }} /> Bags
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <LocalDining sx={{ marginRight: 1 }} /> Clothing
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <LocalDining sx={{ marginRight: 1 }} /> Furniture
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <LocalDining sx={{ marginRight: 1 }} /> Daily Needs
                </a>
              </li>
            </ul>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button color="inherit" component={Link} to="/shops">
                Shops
              </Button>
              <Button color="inherit" component={Link} to="/offers">
                Offers
              </Button>
              <Button color="inherit" component={Link} to="/contact">
                Contact
              </Button>

              <Box sx={{ position: "relative" }}>
                <div className="dropdown">
                  <Button
                    color="inherit"
                    className="dropdown-toggle"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </Button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li>
                      <a className="dropdown-item" href="#" onClick={handleMenuClose}>
                        Flash Sale
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={handleMenuClose}>
                        Manufacturers/Publishers
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={handleMenuClose}>
                        Authors
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={handleMenuClose}>
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={handleMenuClose}>
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={handleMenuClose}>
                        Customer Refund Policy
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={handleMenuClose}>
                        Vendor Refund Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </Box>

              <IconButton
                size="large"
                aria-label="show cart items"
                color="inherit"
                onClick={handleDrawerOpen}
              >
                <Badge badgeContent={cartItems.length} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>

              {isAuthenticated ? (
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              ) : (
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "green", color: "white", marginLeft: "10px" }}
                  onClick={handleSignUpOpen}
                >
                  Join
                </Button>
              )}
            </Box>

            <Button
              variant="contained"
              sx={{
                backgroundColor: isSeller ? "#4caf50" : "#006666",
                color: "white",
                marginLeft: "10px",
              }}
              onClick={() => setIsSeller(!isSeller)}
            >
              {isSeller ? "Seller" : "Become a Seller"}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          {isSignUp ? (
            <SignUpForm
              onClose={handleClose}
              onSwitchToSignIn={handleSignInOpen}
              onSuccessfulAuth={handleSuccessfulAuth}
            />
          ) : (
            <SignInForm onClose={handleClose} onSuccessfulAuth={handleSuccessfulAuth} />
          )}
        </Box>
      </Modal>
      <StyledDrawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        <Box sx={{ width: 400, padding: 2 }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Shopping Cart
          </Typography>
          {cartItems.map((item) => (
            <Box
              key={item.id}
              sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
            >
              <img
                src={item.img}
                alt={item.label}
                style={{ width: 50, height: 50, marginRight: 10 }}
              />
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="body1">{item.label}</Typography>
                <Typography variant="body2" color="text.secondary">
                  ${item.price} x {item.quantity}
                </Typography>
              </Box>
              <Box>
                <IconButton onClick={() => dispatch(decreaseQuantity(item))}>
                  -
                </IconButton>
                <Typography variant="body1" component="span">
                  {item.quantity}
                </Typography>
                <IconButton onClick={() => dispatch(increaseQuantity(item))}>
                  +
                </IconButton>
                <IconButton onClick={() => dispatch(removeFromCart(item.id))}>
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
          
          ))}
          {cartItems.length === 0 && (
            <Typography variant="body1">Your cart is empty</Typography>
          )}
          {cartItems.length > 0 && (
            <>
            <hr />

              <Typography variant="h6" sx={{ marginTop: 2 }}>
                Total: ${totalPrice.toFixed(2)}
              </Typography>
              <hr />
              <Button
                variant="contained"
                color="primary"
                onClick={handleBuyNow}
                sx={{ marginTop: 2 }}
              >
                Buy Now
              </Button>
            </>
          )}
        </Box>
      </StyledDrawer>
    </Box>
  );
}
