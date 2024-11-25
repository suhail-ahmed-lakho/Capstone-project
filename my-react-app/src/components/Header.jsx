import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { increaseQuantity, decreaseQuantity, removeFromCart, addToCart } from '../features/cartSlice';
import { Button, Snackbar } from '@mui/material';
import { FaShoppingCart } from 'react-icons/fa';

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 400,
  },
}));

const ItemContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
  marginBottom: theme.spacing(1),
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  transition: '0.3s',
  '&:hover': {
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  },
}));

const ItemImage = styled('img')({
  width: '60px',
  height: '60px',
  borderRadius: '4px',
  marginRight: '10px',
});

const ItemTitle = styled(Typography)({
  flexGrow: 1,
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  fontWeight: 'bold',
});

const QuantityContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '10px',
});

const QuantityButton = styled(IconButton)({
  margin: '0 5px',
});

const EmptyCartContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  textAlign: 'center',
  padding: theme.spacing(2),
}));

const EmptyCartIcon = styled(FaShoppingCart)({
  fontSize: '100px',
  color: '#ccc',
  marginBottom: '16px',
});

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const dispatch = useDispatch();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleCartIconClick = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setSnackbarMessage(`${item.title} added to cart!`);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show cart" color="inherit" onClick={handleCartIconClick}>
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const cartItems = useSelector((state) => state.cart.items);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          
          <Box sx={{ display: { xs: 'flex', md: 'flex' }, justifyContent: 'end', flexGrow: 1 }}>
            <IconButton size="medium" color="inherit" component={Link} to="/home">
              Home
            </IconButton>
            <IconButton size="medium" color="inherit" component={Link} to="/about">
              About
            </IconButton>
            <IconButton size="medium" color="inherit" component={Link} to="/products">
              Products
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show cart" color="inherit" onClick={handleCartIconClick}>
              <Badge badgeContent={cartItems.length} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
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
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      <StyledDrawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        <Box sx={{ width: 400, padding: 2 }}>
          <Typography variant="h6">Shopping Cart</Typography>
          {cartItems.length === 0 ? (
            <EmptyCartContainer>
              <EmptyCartIcon />
              <Typography variant="h6">Your cart is empty!</Typography>
              <Typography variant="body1">Looks like you haven't added anything yet.</Typography>
              <Button variant="contained" color="primary" component={Link} to="/products" sx={{ marginTop: 2 }}>
                Start Shopping
              </Button>
            </EmptyCartContainer>
          ) : (
            cartItems.map((item) => (
              <ItemContainer key={item.id}>
                <ItemImage src={item.image} alt={item.title} />
                <ItemTitle variant="body1">{item.title}</ItemTitle>
                <QuantityContainer>
                  <QuantityButton onClick={() => dispatch(decreaseQuantity(item))}>-</QuantityButton>
                  <Typography variant="body1">{item.quantity}</Typography>
                  <QuantityButton onClick={() => dispatch(increaseQuantity(item))}>+</QuantityButton>
                </QuantityContainer>
                <IconButton onClick={() => dispatch(removeFromCart(item))} color="error">
                  <DeleteIcon />
                </IconButton>
              </ItemContainer>
            ))
          )}
        </Box>
      </StyledDrawer>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </Box>
  );
}
