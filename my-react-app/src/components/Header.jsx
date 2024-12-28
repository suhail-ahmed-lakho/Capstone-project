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
import {
  Button,
  Drawer,
  Modal,
  useMediaQuery,
  useTheme,
  Avatar,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faUserCircle,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/cartSlice";
import { logout } from "../features/authSlice";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import MyImage from "../images/Logo-new.webp";
import LocalDining from "@mui/icons-material/LocalDining";
import { Link, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

// Import icons for grocery categories
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import KitchenIcon from "@mui/icons-material/Kitchen";
import CakeIcon from "@mui/icons-material/Cake";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import EggIcon from "@mui/icons-material/Egg";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";

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
  width: "100%",
  border: "1px solid #ccc",
  borderRadius: theme.shape.borderRadius,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    width: 300,
    [theme.breakpoints.up("sm")]: {
      width: 400,
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [groceryAnchorEl, setGroceryAnchorEl] = useState(null);
  const [pagesAnchorEl, setPagesAnchorEl] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.auth?.user);
  const isAuthenticated = useSelector((state) => state.auth?.isAuthenticated);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const isMenuOpen = Boolean(anchorEl);
  const isGroceryMenuOpen = Boolean(groceryAnchorEl);
  const isPagesMenuOpen = Boolean(pagesAnchorEl);

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

  const handleGroceryMenuOpen = (event) => {
    setGroceryAnchorEl(event.currentTarget);
  };

  const handleGroceryMenuClose = () => {
    setGroceryAnchorEl(null);
  };

  const handlePagesMenuOpen = (event) => {
    setPagesAnchorEl(event.currentTarget);
  };

  const handlePagesMenuClose = () => {
    setPagesAnchorEl(null);
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

  const handleLogout = () => {
    dispatch(logout());
    handleMenuClose();
    navigate("/");
  };

  const handleSuccessfulAuth = () => {
    setOpen(false);
  };

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuCloseCustom = () => {
    setMobileMenuOpen(false);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
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
      <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Avatar
            sx={{
              width: 24,
              height: 24,
              bgcolor: "green",
              fontSize: "14px",
            }}
          >
            {user?.username?.charAt(0).toUpperCase()}
          </Avatar>
          View Profile
        </Box>
      </MenuItem>
      <MenuItem component={Link} to="/edit-profile" onClick={handleMenuClose}>
        Edit Profile
      </MenuItem>
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
    </Menu>
  );

  const groceryMenuId = "primary-grocery-menu";
  const renderGroceryMenu = (
    <Menu
      anchorEl={groceryAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      id={groceryMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={isGroceryMenuOpen}
      onClose={handleGroceryMenuClose}
    >
      <MenuItem onClick={handleGroceryMenuClose}>
        <LocalPizzaIcon sx={{ mr: 1 }} /> Fast Food
      </MenuItem>
      <MenuItem onClick={handleGroceryMenuClose}>
        <KitchenIcon sx={{ mr: 1 }} /> Frozen
      </MenuItem>
      <MenuItem onClick={handleGroceryMenuClose}>
        <CakeIcon sx={{ mr: 1 }} /> Bakery
      </MenuItem>
      <MenuItem onClick={handleGroceryMenuClose}>
        <EmojiFoodBeverageIcon sx={{ mr: 1 }} /> Dairy
      </MenuItem>
      <MenuItem onClick={handleGroceryMenuClose}>
        <LocalDrinkIcon sx={{ mr: 1 }} /> Drinks
      </MenuItem>
      <MenuItem onClick={handleGroceryMenuClose}>
        <EggIcon sx={{ mr: 1 }} /> Eggs
      </MenuItem>
      <MenuItem onClick={handleGroceryMenuClose}>
        <RiceBowlIcon sx={{ mr: 1 }} /> Rice
      </MenuItem>
    </Menu>
  );

  const pagesMenuId = "primary-pages-menu";
  const renderPagesMenu = (
    <Menu
      anchorEl={pagesAnchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      id={pagesMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={isPagesMenuOpen}
      onClose={handlePagesMenuClose}
    >
      <MenuItem onClick={handlePagesMenuClose} component={Link} to="/faq">
        FAQ
      </MenuItem>
      <MenuItem
        onClick={handlePagesMenuClose}
        component={Link}
        to="/privacy-policy"
      >
        Privacy Policy
      </MenuItem>
      <MenuItem
        onClick={handlePagesMenuClose}
        component={Link}
        to="/terms-of-service"
      >
        Terms of Service
      </MenuItem>
    </Menu>
  );

  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.slice(1));
    return total + price * item.quantity;
  }, 0);

  const handleBuyNow = () => {
    console.log("Proceeding to checkout...");
  };

  const renderMobileMenu = (
    <StyledDrawer
      anchor="left"
      open={mobileMenuOpen}
      onClose={handleMobileMenuCloseCustom}
    >
      <Box sx={{ width: 250, padding: 2 }}>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Menu
        </Typography>
        <MenuItem onClick={handleGroceryMenuOpen}>
          <LocalDining sx={{ marginRight: 1 }} />
          Grocery
        </MenuItem>
        <MenuItem
          component={Link}
          to="/shops"
          onClick={handleMobileMenuCloseCustom}
        >
          Shops
        </MenuItem>
        <MenuItem
          component={Link}
          to="/offers"
          onClick={handleMobileMenuCloseCustom}
        >
          Offers
        </MenuItem>
        <MenuItem onClick={handlePagesMenuOpen}>Pages</MenuItem>
        <MenuItem
          component={Link}
          to="/contact"
          onClick={handleMobileMenuCloseCustom}
        >
          Contact
        </MenuItem>
        <MenuItem
          onClick={() => {
            setIsSeller(!isSeller);
            handleMobileMenuCloseCustom();
          }}
        >
          {isSeller ? "Seller" : "Become a Seller"}
        </MenuItem>
        {!isAuthenticated && (
          <MenuItem
            onClick={() => {
              handleSignUpOpen();
              handleMobileMenuCloseCustom();
            }}
          >
            Join
          </MenuItem>
        )}
      </Box>
    </StyledDrawer>
  );

  return (
    <Box
      sx={{ flexGrow: 1, textTransform: "capitalize", paddingBottom: "30px" }}
    >
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
          marginBottom: "80px",
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={handleMobileMenuOpen}
            >
              <FontAwesomeIcon icon={faBars} size="lg" />
            </IconButton>
          )}
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
              style={{ height: "30px", marginRight: "10px" }}
            />
          </Typography>

          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: "8px",
                padding: "5px 10px",
                marginLeft: "20px",
                marginTop: "10px",
                cursor: "pointer",
                backgroundColor: "lightgreen",
                "&:hover": {
                  backgroundColor: "green",
                  color: "white",
                },
              }}
              onClick={handleGroceryMenuOpen}
            >
              <Typography
                variant="body1"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LocalDining sx={{ color: "white", marginRight: 1 }} />
                Grocery
                <ExpandMoreIcon sx={{ marginLeft: 0.5, color: "white" }} />
              </Typography>
            </Box>
          )}

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for products (e.g. fish, apple, oil)"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          {!isMobile && (
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button color="inherit" component={Link} to="/shops">
                Shops
              </Button>
              <Button color="inherit" component={Link} to="/offers">
                Offers
              </Button>
              <Button
                color="inherit"
                aria-controls={pagesMenuId}
                aria-haspopup="true"
                onClick={handlePagesMenuOpen}
                endIcon={<ExpandMoreIcon />}
              >
                Pages
              </Button>
              <Button color="inherit" component={Link} to="/contact">
                Contact
              </Button>
            </Box>
          )}

          <Box
            sx={{
              position: "fixed",
              right: 20,
              top: "50%",
              transform: "translateY(-50%)",
              display: "flex",
              alignItems: "center",
              gap: 1,
              zIndex: 1000,
            }}
          >
            {/* Price and Items Info Panel */}
            <Box
              sx={{
                backgroundColor: "white",
                borderRadius: "20px",
                padding: "8px 15px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                transform: cartItems.length
                  ? "translateX(0)"
                  : "translateX(100px)",
                opacity: cartItems.length ? 1 : 0,
                transition: "all 0.3s ease",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  color: "green",
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                }}
              >
                $
                {cartItems
                  .reduce((total, item) => {
                    // Remove the '$' symbol and convert to number
                    const price = parseFloat(item.price.replace("$", ""));
                    return total + price * item.quantity;
                  }, 0)
                  .toFixed(2)}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  fontSize: "0.75rem",
                }}
              >
                {cartItems.reduce((total, item) => total + item.quantity, 0)}{" "}
                items
              </Typography>
            </Box>

            {/* Enhanced Cart Button */}
            <IconButton
              size="large"
              aria-label="show cart items"
              color="inherit"
              onClick={handleDrawerOpen}
              sx={{
                bgcolor: "white",
                width: 60,
                height: 60,
                transition: "all 0.3s ease",
                position: "relative",
                "&:hover": {
                  bgcolor: "green",
                  transform: "scale(1.1)",
                  "& .cart-icon": {
                    color: "white",
                    transform: "rotate(10deg)",
                  },
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -2,
                  left: -2,
                  right: -2,
                  bottom: -2,
                  borderRadius: "50%",
                  border: "2px solid lightgreen",
                  animation: cartItems.length ? "ripple 1.5s infinite" : "none",
                },
                "@keyframes ripple": {
                  "0%": {
                    transform: "scale(1)",
                    opacity: 1,
                  },
                  "100%": {
                    transform: "scale(1.2)",
                    opacity: 0,
                  },
                },
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            >
              <StyledBadge
                badgeContent={cartItems.length}
                color="error"
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "red",
                    color: "white",
                    animation: cartItems.length ? "bounce 0.5s ease" : "none",
                    "@keyframes bounce": {
                      "0%, 100%": { transform: "scale(1)" },
                      "50%": { transform: "scale(1.2)" },
                    },
                  },
                }}
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className="cart-icon"
                  style={{
                    color: "green",
                    fontSize: "1.5rem",
                    transition: "all 0.3s ease",
                  }}
                />
              </StyledBadge>
            </IconButton>
          </Box>
          {isAuthenticated ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "green",
                    fontSize: "16px",
                  }}
                >
                  {user?.username?.charAt(0).toUpperCase()}
                </Avatar>
              </IconButton>
              <Typography
                variant="subtitle1"
                sx={{
                  display: { xs: "none", md: "block" },
                  color: "green",
                  fontWeight: 500,
                }}
              >
                {user?.username}
              </Typography>
            </Box>
          ) : (
            !isMobile && (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "green",
                  color: "white",
                  marginLeft: "10px",
                }}
                onClick={handleSignUpOpen}
              >
                Join
              </Button>
            )
          )}
        </Toolbar>
      </AppBar>
      {renderMenu}
      {renderMobileMenu}
      {renderGroceryMenu}
      {renderPagesMenu}
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
              onSwitchToSignIn={() => setIsSignUp(false)}
              onSuccessfulAuth={handleSuccessfulAuth}
            />
          ) : (
            <SignInForm
              onClose={handleClose}
              onSwitchToSignUp={() => setIsSignUp(true)}
              onSuccessfulAuth={handleSuccessfulAuth}
            />
          )}
        </Box>
      </Modal>
      <StyledDrawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        <Box sx={{ width: "100%", padding: 2 }}>
          <Typography
            variant="h4"
            sx={{ marginBottom: 5, textAlign: "center", fontWeight: "bold" }}
          >
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
            <Typography variant="h5" sx={{ textAlign: "center" }}>
              Your cart is empty
            </Typography>
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
                sx={{ marginTop: 2, width: "100%" }}
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
