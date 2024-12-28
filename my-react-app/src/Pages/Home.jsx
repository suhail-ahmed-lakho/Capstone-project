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
    console.log("Buy Now clicked:", item);
    handleCloseModal();
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
                bgcolor: "#f9f9f9",
                borderRadius: "8px",
                boxShadow: 2,
                p: 2,
                maxHeight: "600px",
                overflowY: "auto",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Categories
                <Button
                  onClick={() => setShowCategories(!showCategories)}
                  sx={{ ml: 1 }}
                >
                  {showCategories ? <ExpandLess /> : <ExpandMore />}
                </Button>
              </Typography>
              {showCategories && (
                <Box>
                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      mb: 1,
                      backgroundColor:
                        selectedCategory === "All" ? "#e0f7fa" : "transparent",
                      "&:hover": { backgroundColor: "#f0f0f0" },
                      borderRadius: "20px",
                      padding: "10px",
                    }}
                    onClick={() => handleCategoryChange("All")}
                  >
                    All
                  </Button>
                  {Object.keys(items).map((category) => (
                    <Tooltip title={`View ${category}`} arrow key={category}>
                      <Button
                        variant="outlined"
                        fullWidth
                        sx={{
                          mb: 1,
                          backgroundColor:
                            selectedCategory === category
                              ? "#e0f7fa"
                              : "transparent",
                          "&:hover": { backgroundColor: "#f0f0f0" },
                          borderRadius: "20px",
                          padding: "10px",
                        }}
                        onClick={() => handleCategoryChange(category)}
                      >
                        {category}
                      </Button>
                    </Tooltip>
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
                        border: "1px solid #ddd",
                        borderRadius: "8px",
                        p: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        transition: "transform 0.2s",
                        "&:hover": { transform: "scale(1.05)" },
                      }}
                    >
                      <img
                        src={item.img}
                        alt={item.label}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "8px",
                          cursor: "pointer",
                        }}
                        onClick={() => handleOpenModal(item)}
                      />
                      <Typography variant="h6" align="center" sx={{ mt: 1 }}>
                        {item.label}
                      </Typography>
                      <Typography
                        variant="body2"
                        align="center"
                        sx={{ color: "text.secondary" }}
                      >
                        {item.weight}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          mt: 1,
                        }}
                      >
                        <Typography variant="h6" sx={{ color: "primary.main" }}>
                          {item.price}
                        </Typography>
                        <Button
                          variant="contained"
                          color="primary"
                          startIcon={<FontAwesomeIcon icon={faPlus} />}
                          onClick={() => handleAddToCart(item)}
                        >
                          Add
                        </Button>
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
