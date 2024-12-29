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

import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//  MUI icons 
import {
  FreeBreakfast as BreakfastIcon,
  Restaurant as RestaurantIcon,
  LocalDining as LocalDiningIcon,
  Kitchen as KitchenIcon,
  Fastfood as FastfoodIcon,
  LocalPizza as LocalPizzaIcon,
  EmojiFoodBeverage as BeverageIcon,
  LocalCafe as CafeIcon,
  Icecream as IcecreamIcon,
  Cookie as CookieIcon,
  RamenDining as NoodlesIcon,
  SoupKitchen as SoupIcon,
  SetMeal as SauceIcon
} from "@mui/icons-material";
// Update the getCategoryIcon function - replace FastFood with LunchDining


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
    position: 'relative',
    width: '100%',
    overflow: 'hidden', // Prevent horizontal scroll
    bgcolor: "background.paper",
    backgroundImage: `url(${BgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: { xs: "100vh", sm: "80vh", md: "90vh" }, // Use minHeight instead of height
    display: 'flex',
    alignItems: 'center',
    pt: { xs: '64px', sm: '72px' }, // Account for header height
    pb: { xs: 4, sm: 6, md: 8 },
  }}
>
  <Container 
    maxWidth="lg"
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      py: { xs: 4, sm: 6, md: 8 },
    }}
  >
    <Typography
      component="h1"
      variant="h2"
      align="center"
      color="text.primary"
      gutterBottom
      sx={{
        fontWeight: 700,
        letterSpacing: "0.05em",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
        fontSize: { xs: '2rem', sm: '2.75rem', md: '3.5rem' },
        maxWidth: '90%',
        wordWrap: 'break-word', // Handle long words
        mb: { xs: 2, sm: 3 }
      }}
    >
      Groceries Delivered in 90 Minutes
    </Typography>

    <Typography
      variant="h5"
      align="center"
      color="text.secondary"
      sx={{
        mb: { xs: 3, sm: 4 },
        maxWidth: '800px',
        px: 2,
        fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
      }}
    >
      Get your healthy foods & snacks delivered at your doorsteps all day everyday
    </Typography>
          
<Box sx={{ mt: 4, display: "flex", justifyContent: "center", position: 'relative' }}>
  <TextField
    variant="outlined"
    placeholder="Search your products from here"
    value={searchTerm}
    onChange={handleSearchChange}
    sx={{
      width: { xs: '90%', sm: '600px' },
      '& .MuiOutlinedInput-root': {
        bgcolor: 'white',
        borderRadius: '50px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        transition: 'all 0.3s ease',
        '&:hover': {
          boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
          '& .search-button': {
            bgcolor: 'darkgreen',
            transform: 'translateX(5px)',
          }
        },
        '&.Mui-focused': {
          '& fieldset': { borderColor: 'green' },
        }
      },
      '& .MuiOutlinedInput-input': {
        padding: '16px 24px',
      }
    }}
    InputProps={{
      endAdornment: (
        <Button
          variant="contained"
          className="search-button"
          sx={{
            bgcolor: 'green',
            borderRadius: '50px',
            px: 3,
            py: 1,
            minWidth: 'auto',
            position: 'absolute',
            right: 5,
            transition: 'all 0.3s ease',
            '&:hover': {
              bgcolor: 'darkgreen',
            }
          }}
        >
          <SearchIcon />
        </Button>
      ),
    }}
  />

  {/* Search Suggestions Dropdown */}
  {searchSuggestions.length > 0 && (
    <Box
      sx={{
        position: 'absolute',
        top: '100%',
        width: { xs: '90%', sm: '600px' },
        mt: 1,
        bgcolor: 'white',
        borderRadius: 2,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        zIndex: 1000,
        overflow: 'hidden',
        animation: 'fadeIn 0.3s ease',
        '@keyframes fadeIn': {
          from: { opacity: 0, transform: 'translateY(-10px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        }
      }}
    >
      {searchSuggestions.map((item, index) => (
        <Box
          key={item.id}
          onClick={() => {
            handleOpenModal(item);
            setSearchSuggestions([]);
            setSearchTerm('');
          }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            p: 2,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            borderBottom: index < searchSuggestions.length - 1 ? '1px solid #eee' : 'none',
            '&:hover': {
              bgcolor: 'rgba(0, 128, 0, 0.05)',
              transform: 'translateX(10px)'
            }
          }}
        >
          <img
            src={item.img}
            alt={item.label}
            style={{
              width: 40,
              height: 40,
              objectFit: 'cover',
              borderRadius: 8
            }}
          />
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
              {item.label}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.weight} • ${parseFloat(item.price.replace('$', '')).toFixed(2)}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  )}
</Box>
        </Container>
      </Box>

    
      {/* Swiper Section */}
<Box sx={{ mt: 4, mb: 4 }}>
  <Container maxWidth="lg">
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }}
      pagination={{
        clickable: false,
        dynamicBullets: true,
      }}
      navigation={false}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      {[Img1, Img2, Img3, Img4, Img5].map((img, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              position: 'relative',
              paddingTop: '56.25%', // 16:9 aspect ratio
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  </Container>
</Box>

      {/* Category and Items Section */}
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* Category Sidebar */}
          <Grid item xs={12} md={3}>
  <Box
    sx={{
      position: 'sticky',
      top: '80px', // Adjust based on your header height
      maxHeight: 'calc(100vh - 100px)',
      overflowY: 'auto',
      bgcolor: "#fff",
      borderRadius: "8px",
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      p: 2,
      '&::-webkit-scrollbar': {
        width: '6px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: '3px',
      }
    }}
  >
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, px: 2 }}>
      Categories
    </Typography>
    {showCategories && (
      <Box>
        {Object.keys(items).map((category) => {
          // Get the appropriate icon for each category
          const getIcon = (cat) => {
            switch(cat) {
              case 'Breakfast':
                return <BreakfastIcon />;
              case 'Meat & Fish':
                return <RestaurantIcon />;
              case 'Snacks':
                return <FastfoodIcon />;
              case 'Nuts & Biscuits':
                return <CookieIcon />;
              case 'Chocolates':
                return <IcecreamIcon />;
              case 'Crisps':
                return <LocalPizzaIcon />;
              case 'Noodles & Pasta':
                return <NoodlesIcon />;
              case 'Sauce':
                return <SauceIcon />;
              case 'Soup':
                return <SoupIcon />;
              default:
                return <LocalDiningIcon />;
            }
          };

          return (
            <Button
              key={category}
              fullWidth
              startIcon={getIcon(category)}
              sx={{
                mb: 0.5,
                py: 1.5,
                justifyContent: "flex-start",
                color: selectedCategory === category ? 'green' : 'inherit',
                bgcolor: selectedCategory === category ? 'rgba(0, 128, 0, 0.08)' : 'transparent',
                borderLeft: selectedCategory === category ? '4px solid green' : '4px solid transparent',
                '&:hover': { 
                  bgcolor: 'rgba(0, 128, 0, 0.08)',
                  borderLeft: '4px solid green',
                  '& .MuiSvgIcon-root': {
                    transform: 'scale(1.2)',
                    color: 'green'
                  }
                },
                '& .MuiSvgIcon-root': {
                  transition: 'all 0.2s ease',
                  fontSize: '1.3rem'
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
          );
        })}
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
