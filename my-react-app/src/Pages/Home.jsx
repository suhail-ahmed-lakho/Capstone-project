import React, { useState } from "react";
import {
  Typography,
  Container,
  Box,
  TextField,
  Button,
  CircularProgress,
  Tooltip,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Modal,
  IconButton,
} from "@mui/material";
import {
  Search as SearchIcon,
  ExpandMore,
  ExpandLess,
  AddShoppingCart,
} from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import "swiper/swiper-bundle.css";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "../store/slices/cartSlice";
import { selectItems } from "../features/itemsSlice";

// Import all images
import BgImage from "../images/bg-image.png";
import Img1 from "../images/img-1.webp";
import Img2 from "../images/img-2.webp";
import Img3 from "../images/img-3.webp";
import Img4 from "../images/img-4.webp";
import Img5 from "../images/img-5.webp";

// Add these imports at the top with your other MUI imports

// Update the imports - remove FastFood and use alternative icons
import {
  LocalFlorist,          // Fruits & Vegetables
  Restaurant,            // Meat & Fish
  LocalCafe,            // Snacks & Beverages
  Pets,                 // Pet Care
  CleaningServices,     // Home & Cleaning
  LocalDrink,           // Dairy
  Kitchen,              // Cooking
  FreeBreakfast,        // Breakfast
  LocalBar,             // Beverage
  Cake,                 // Bakery & Cakes
  LocalDining,          // Ready to Eat
  EmojiFoodBeverage,    // Tea & Coffee
  LocalPizza,           // Fast Food
  RiceBowl,             // Rice & Grains
  Egg,                  // Eggs
  Grass,                // Organic Food
  LunchDining,          // Instead of FastFood
  Cookie,               // Biscuits & Cookies
  Icecream,             // Ice Cream
  Inventory,            // Dry Fruits & Nuts
  LocalMall,            // Packaged Foods
  WaterDrop,            // Oil & Ghee
  Spa,                  // Spices & Masalas
  ShoppingBasket,       // Groceries
} from "@mui/icons-material";



// Update the getCategoryIcon function - replace FastFood with LunchDining
const getCategoryIcon = (category) => {
  const icons = {
    'Fruits & Vegetables': <LocalFlorist sx={{ color: '#2e7d32' }} />,
    'Meat & Fish': <Restaurant sx={{ color: '#d32f2f' }} />,
    'Snacks & Beverages': <LocalCafe sx={{ color: '#ed6c02' }} />,
    'Pet Care': <Pets sx={{ color: '#9c27b0' }} />,
    'Home & Cleaning': <CleaningServices sx={{ color: '#0288d1' }} />,
    'Dairy & Eggs': <Egg sx={{ color: '#ffa726' }} />,
    'Cooking Essentials': <Kitchen sx={{ color: '#d84315' }} />,
    'Breakfast': <FreeBreakfast sx={{ color: '#6d4c41' }} />,
    'Tea & Coffee': <EmojiFoodBeverage sx={{ color: '#5d4037' }} />,
    'Bakery & Cakes': <Cake sx={{ color: '#c2185b' }} />,
    'Ice Cream': <Icecream sx={{ color: '#00acc1' }} />,
    'Fast Food': <LunchDining sx={{ color: '#f57c00' }} />, // Changed to LunchDining
    'Rice & Grains': <RiceBowl sx={{ color: '#689f38' }} />,
    'Organic Food': <Grass sx={{ color: '#558b2f' }} />,
    'Ready to Eat': <LocalDining sx={{ color: '#e64a19' }} />,
    'Instant Food': <LocalPizza sx={{ color: '#f4511e' }} />,
    'Biscuits & Cookies': <Cookie sx={{ color: '#8d6e63' }} />,
    'Dry Fruits & Nuts': <Inventory sx={{ color: '#795548' }} />,
    'Spices & Masalas': <Spa sx={{ color: '#d84315' }} />,
    'Packaged Foods': <LocalMall sx={{ color: '#00897b' }} />,
    'Oil & Ghee': <WaterDrop sx={{ color: '#ffa000' }} />,
    'All Categories': <ShoppingBasket sx={{ color: '#2e7d32' }} />,
  };
  return icons[category] || <ShoppingBasket sx={{ color: '#2e7d32' }} />;
};

const Home = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCategories, setShowCategories] = useState(true);
  const [visibleItemsCount, setVisibleItemsCount] = useState(12);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const items = useSelector(selectItems);
  const cartItems = useSelector((state) => state.cart.items);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleItemsCount(12);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      const suggestions = Object.values(items)
        .flat()
        .filter((item) =>
          item.label.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 5);
      setSearchSuggestions(suggestions);
    } else {
      setSearchSuggestions([]);
    }
  };

  const filteredItems =
    selectedCategory === "All"
      ? Object.values(items)
          .flat()
          .filter((item) =>
            item.label.toLowerCase().includes(searchTerm.toLowerCase())
          )
      : items[selectedCategory].filter((item) =>
          item.label.toLowerCase().includes(searchTerm.toLowerCase())
        );

  const loadMoreItems = () => {
    setVisibleItemsCount((prevCount) => prevCount + 8);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setModalOpen(false);
  };

  const handleBuyNow = (item) => {
    dispatch(addToCart(item));
    handleCloseModal();
    navigate('/checkout');
  };

  return (
    <Box>
      {/* Hero Section */}
      {/* Hero Section */}

      <Box
        sx={{
          bgcolor: "background.paper",

          py: { xs: 4, sm: 6, md: 8 },

          backgroundImage: `url(${BgImage})`,

          backgroundSize: "cover",

          height: { xs: "60vh", sm: "70vh", md: "90vh" },

          backgroundPosition: "center",

          pb: 10,
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            display: "flex",

            flexDirection: "column",

            alignItems: "center",

            justifyContent: "center",

            height: "100%",

            textAlign: { xs: "center", sm: "center", md: "left" },
          }}
        >
          <Typography
            component="h1"
            variant={{ xs: "h4", sm: "h3", md: "h2" }}
            align="center"
            color="text.primary"
            gutterBottom
            sx={{
              fontWeight: 700,

              letterSpacing: "0.05em",

              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",

              whiteSpace: "nowrap",
            }}
          >
            Groceries Delivered in 90 Minutes
          </Typography>

          <Typography
            variant={{ xs: "h6", sm: "h5" }}
            align="center"
            color="text.secondary"
            paragraph
          >
            Get your healthy foods & snacks delivered at your doorsteps all day
            everyday
          </Typography>

          <Box sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
            <TextField
              variant="outlined"
              placeholder="Search your products"
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{
                width: "500px",

                mb: 2,

                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "green",
                  },
                },
              }}
              InputProps={{
                endAdornment: (
                  <Button
                    variant="contained"
                    color="success"
                    sx={{
                      padding: "0 16px",

                      height: "100%",

                      minWidth: "auto",

                      transition: "background-color 0.3s, transform 0.3s",

                      position: "absolute",

                      right: 0,

                      "&:hover": {
                        backgroundColor: "#388e3c",

                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <SearchIcon sx={{ fontSize: 20 }} />
                  </Button>
                ),
              }}
            />

            {searchSuggestions.length > 0 && (
              <Box
                sx={{
                  position: "absolute",
                  zIndex: 1,
                  bgcolor: "white",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  mt: 1,
                }}
              >
                {searchSuggestions.map((item) => (
                  <Button
                    key={item.id}
                    onClick={() => handleAddToCart(item)}
                    sx={{
                      justifyContent: "flex-start",
                      width: "100%",
                      textAlign: "left",
                      color: "green",
                      gap: 2,
                      "&:hover": {
                        bgcolor: "#f0f0f0",
                        "& .suggestion-cart": {
                          transform: "rotate(10deg)",
                        },
                      },
                    }}
                  >
                    {item.label}
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      size="sm"
                      className="suggestion-cart"
                      style={{
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </Button>
                ))}
              </Box>
            )}
          </Box>
        </Container>
      </Box>

      {/* Swiper Section */}
      <Box sx={{ mt: 4, mb: 4 }}>
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[Img1, Img2, Img3, Img4, Img5].map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt="" style={{ width: "100%", height: "auto" }} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Category and Items Section */}
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* Category Sidebar */}
          <Grid item xs={12} md={3}>
  <Box
    sx={{
      bgcolor: "#fff",
      borderRadius: "8px",
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      p: 2,
      maxHeight: "600px",
      overflowY: "auto",
    }}
  >
    {showCategories && (
      <Box>
        {Object.keys(items).map((category) => (
          <Button
          key={category}
          fullWidth
          startIcon={getCategoryIcon(category)}
          sx={{
            mb: 1,
            py: 1.5,
            justifyContent: "flex-start",
            color: selectedCategory === category ? 'green' : 'inherit',
            bgcolor: selectedCategory === category ? 'rgba(0, 128, 0, 0.08)' : 'transparent',
            borderLeft: selectedCategory === category ? '4px solid green' : '4px solid transparent',
            '&:hover': { 
              bgcolor: 'rgba(0, 128, 0, 0.08)',
              borderLeft: '4px solid green',
              '& .MuiButton-startIcon': {
                transform: 'scale(1.1)'
              }
            },
            '& .MuiButton-startIcon': {
              transition: 'transform 0.2s'
            },
            borderRadius: '0 8px 8px 0',
            textTransform: 'none',
            fontSize: '0.95rem',
            fontWeight: selectedCategory === category ? 600 : 400,
            pl: 2,
          }}
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </Button>
        ))}
      </Box>
    )}
  </Box>
</Grid>

          {/* Product Grid */}
          <Grid item xs={12} md={9}>
            <Grid container spacing={2}>
              {loading ? (
                <CircularProgress />
              ) : (
                filteredItems.slice(0, visibleItemsCount).map((item) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                  <Box
                    sx={{
                      bgcolor: 'white',
                      borderRadius: '8px',
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                      '&:hover': { 
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                        transform: 'translateY(-5px)'
                      },
                    }}
                  >
                    {/* Discount Badge */}
                    {item.discount && (
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 10,
                          right: 10,
                          bgcolor: '#ffc107',
                          color: 'white',
                          px: 1,
                          py: 0.5,
                          borderRadius: '4px',
                          fontSize: '0.875rem',
                          fontWeight: 'bold',
                        }}
                      >
                        25% OFF
                      </Box>
                    )}
              
                    {/* Product Image */}
                    <Box
                      sx={{
                        position: 'relative',
                        width: '100%',
                        pt: '100%',
                        mb: 2,
                      }}
                    >
                      <img
                        src={item.img}
                        alt={item.label}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleOpenModal(item)}
                      />
                    </Box>
              
                    {/* Product Info */}
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontSize: '1rem',
                          fontWeight: 500,
                          mb: 0.5,
                          color: '#2d3436'
                        }}
                      >
                        {item.label}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: '#636e72',
                          mb: 1,
                          fontSize: '0.875rem'
                        }}
                      >
                        {item.weight}
                      </Typography>
                    </Box>
              
                    {/* Price and Cart */}
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mt: 1,
                      }}
                    >
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          color: '#00b894',
                          fontWeight: 600,
                          fontSize: '1.1rem'
                        }}
                      >
                        ${parseFloat(item.price.replace('$', '')).toFixed(2)}
                      </Typography>
              
                      <IconButton
                        onClick={() => handleAddToCart(item)}
                        sx={{
                          bgcolor: '#00b894',
                          color: 'white',
                          width: '36px',
                          height: '36px',
                          '&:hover': {
                            bgcolor: '#00a884',
                            transform: 'scale(1.1)',
                          },
                          transition: 'all 0.2s ease',
                          boxShadow: '0 2px 4px rgba(0,184,148,0.2)',
                        }}
                      >
                        <FontAwesomeIcon 
                          icon={faCartPlus} 
                          style={{ fontSize: '1rem' }}
                        />
                      </IconButton>
                    </Box>
                  </Box>
                </Grid>
                ))
              )}
            </Grid>
            {filteredItems.length > visibleItemsCount && (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={loadMoreItems}
                >
                  Load More
                </Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>

      {/* Modal */}
      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="product-modal-title"
        aria-describedby="product-modal-description"
      >
        <Card
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            maxWidth: "90%",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          {selectedItem && (
            <>
              <CardMedia
                component="img"
                height="200"
                image={selectedItem.img}
                alt={selectedItem.label}
              />
              <CardContent>
                <Typography
                  id="product-modal-title"
                  variant="h6"
                  component="h2"
                >
                  {selectedItem.label}
                </Typography>
                <Typography id="product-modal-description" sx={{ mt: 2 }}>
                  Price: {selectedItem.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Weight: {selectedItem.weight}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  Product details: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
                <Button
                  variant="contained"
                  onClick={() => handleBuyNow(selectedItem)}
                  sx={{
                    bgcolor: "green",
                    "&:hover": {
                      bgcolor: "darkgreen",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  Buy Now
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => handleAddToCart(selectedItem)}
                  sx={{
                    color: "green",
                    borderColor: "green",
                    "&:hover": {
                      bgcolor: "green",
                      color: "white",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      size="sm"
                      style={{
                        transition: "transform 0.3s ease",
                      }}
                    />
                    Add to Cart
                  </Box>
                </Button>
              </CardActions>
            </>
          )}
        </Card>
      </Modal>

      {/* Scroll to Top Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        sx={{
          position: "fixed",
          bottom: 20,
          right: 20,
          borderRadius: "50%",
          padding: "20px",
        }}
      >
        ↑
      </Button>

      <Footer />
    </Box>
  );
};

export default Home;
