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
} from "@mui/material";
import {
  Search as SearchIcon,
  ExpandMore,
  ExpandLess,
  AddShoppingCart,
} from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Footer from "../components/Footer.jsx";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";

// Import all images
import BgImage from "../images/bg-image.png";
import Img1 from "../images/img-1.webp";
import Img2 from "../images/img-2.webp";
import Img3 from "../images/img-3.webp";
import Img4 from "../images/img-4.webp";
import Img5 from "../images/img-5.webp";
import Apple from "../images/Apples.webp";
import Mangoes from "../images/Apples.webp";
import fish from "../images/fish.webp";
import BabySpinach from "../images/BabySpinach.webp";
import RedCherries from "../images/RedCherries.webp";
import strawberry from "../images/strawberry.webp";
import swordfish_smniuv from "../images/swordfish_smniuv.webp";
import VeggiePlatter from "../images/VeggiePlatter.webp";
import halibutjaz7ju from "../images/halibut_jaz7ju.webp";

const Home = () => {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCategories, setShowCategories] = useState(true);
  const [visibleItemsCount, setVisibleItemsCount] = useState(12);

  const items = {
    "Fruits & Vegetables": [
      {
        
        id: 1,
        img: Apple,
        label: "Apple",
        price: "$2.00",
        weight: "1lb",
      },
      {
         id: 2,
        img: Mangoes,
        label: "Mangoes",
        price: "$1.50",
        weight: "1lb",
      },
      {
         id:3 ,
        img: strawberry,
        label: "strawberry",
        price: "$3.00",
        weight: "2lb",
      },
      {
         id: 4,
        img: RedCherries,
        label: "RedCherries",
        price: "$4.00",
        weight: "3lb",
      },
      {
         id: 5,
        img: RedCherries,
        label: "RedCherries",
        price: "$4.00",
        weight: "3lb",
      },
    ],
    "Meat & Fish": [
      {
         id: 6,
        img: swordfish_smniuv,
        label: "Sword Fish",
        price: "$5.00",
        weight: "2lb",
      },
      {
         id:7 ,
        img: fish,
        label: "Golden Fish",
        price: "$10.00",
        weight: "1lb",
      },
      {
         id: 8,
        img: VeggiePlatter,
        label: "Veggie Platter",
        price: "$8.00",
        weight: "1lb",
      },
      {
         id: 9,
        img: halibutjaz7ju,
        label: "Halibut",
        price: "$7.00",
        weight: "1lb",
      },
      {
         id:10 ,
        img: halibutjaz7ju,
        label: "Halibut",
        price: "$7.00",
        weight: "1lb",
      },
    ],
    Snacks: [
      {
         id:11 ,
        img: Img1,
        label: "Chips",
        price: "$2.50",
        weight: "1lb",
      },
      {
         id:12 ,
        img: Img2,
        label: "Cookies",
        price: "$3.00",
        weight: "1lb",
      },
      {
         id: 13,
        img: Img3,
        label: "Nuts",
        price: "$4.50",
        weight: "1lb",
      },
      {
         id: 14,
        img: Img4,
        label: "Candy",
        price: "$1.00",
        weight: "1lb",
      },
    ],
    "Nuts & Biscuits": [
      {
         id: 15,
        img: Img1,
        label: "Almonds",
        price: "$5.00",
        weight: "1lb",
      },
      {
         id: 16,
        img: Img2,
        label: "Cashews",
        price: "$6.00",
        weight: "1lb",
      },
      {
         id:17 ,
        img: Img3,
        label: "Digestive",
        price: "$4.00",
        weight: "1lb",
      },
      {
         id: 18,
        img: Img4,
        label: "Oreo",
        price: "$3.00",
        weight: "1lb",
      },
    ],
    Chocolates: [
      {
         id:19 ,
        img: Img1,
        label: "Dark Chocolate",
        price: "$5.00",
        weight: "1lb",
      },
      {
         id: 20,
        img: Img2,
        label: "Milk Chocolate",
        price: "$4.00",
        weight: "1lb",
      },
      {
         id:21 ,
        img: Img3,
        label: "White Chocolate",
        price: "$5.00",
        weight: "1lb",
      },
      {
         id:22 ,
        img: Img4,
        label: "Chocolate Bar",
        price: "$3.00",
        weight: "1lb",
      },
    ],
    Crisps: [
      {
         id: 23,
        img: Img1,
        label: "Potato Chips",
        price: "$3.00",
        weight: "1lb",
      },
      {
         id: 24,
        img: Img2,
        label: "Tortilla Chips",
        price: "$3.50",
        weight: "1lb",
      },
      {
         id: 25,
        img: Img3,
        label: "Pita Chips",
        price: "$4.00",
        weight: "1lb",
      },
      {
         id: 26,
        img: Img4,
        label: "Veggie Chips",
        price: "$3.50",
        weight: "1lb",
      },
    ],
    "Noodles & Pasta": [
      {
         id: 27,
        img: Img1,
        label: "Spaghetti",
        price: "$4.00",
        weight: "1lb",
      },
      {
         id: 28,
        img: Img2,
        label: "Macaroni",
        price: "$3.50",
        weight: "1lb",
      },
      {
         id: 29,
        img: Img3,
        label: "Ramen",
        price: "$5.00",
        weight: "1lb",
      },
      {
         id: 30,
        img: Img4,
        label: "Fettuccine",
        price: "$4.50",
        weight: "1lb",
      },
    ],
    Sauce: [
      {
         id: 31,
        img: Img1,
        label: "Tomato Sauce",
        price: "$3.00",
        weight: "1lb",
      },
      {
         id: 32,
        img: Img2,
        label: "Soy Sauce",
        price: "$3.50",
        weight: "1lb",
      },
      {
         id: 33,
        img: Img3,
        label: "Barbecue Sauce",
        price: "$4.00",
        weight: "1lb",
      },
      {
         id: 34,
        img: Img4,
        label: "Hot Sauce",
        price: "$2.50",
        weight: "1lb",
      },
    ],
    Soup: [
      {
         id: 35,
        img: Img1,
        label: "Tomato Soup",
        price: "$3.00",
        weight: "1lb",
      },
      {
         id: 36,
        img: Img2,
        label: "Chicken Soup",
        price: "$3.50",
        weight: "1lb",
      },
      {
         id: 37,
        img: Img3,
        label: "Vegetable Soup",
        price: "$3.00",
        weight: "1lb",
      },
      {
         id: 38,
        img: Img4,
        label: "Minestrone",
        price: "$3.50",
        weight: "1lb",
      },
    ],
    "Pet Care": [
      {
         id: 39,
        img: Img1,
        label: "Dog Food",
        price: "$10.00",
        weight: "1lb",
      },
      {
         id: 40,
        img: Img2,
        label: "Cat Food",
        price: "$8.00",
        weight: "1lb",
      },
      {
         id: 41,
        img: Img3,
        label: "Pet Treats",
        price: "$5.00",
        weight: "1lb",
      },
      {
         id: 42,
        img: Img4,
        label: "Pet Toys",
        price: "$4.00",
        weight: "1lb",
      },
    ],
    "Home & Cleaning": [
      {
         id: 43,
        img: Img1,
        label: "Detergent",
        price: "$5.00",
        weight: "1lb",
      },
      {
         id:44 ,
        img: Img2,
        label: "Disinfectant",
        price: "$6.00",
        weight: "1lb",
      },
      {
         id:45 ,
        img: Img3,
        label: "Broom",
        price: "$3.00",
        weight: "1lb",
      },
      {
         id: 46,
        img: Img4,
        label: "Mop",
        price: "$4.00",
        weight: "1lb",
      },
    ],
    Dairy: [
      {
         id:47 ,
        img: Img1,
        label: "Milk",
        price: "$2.00",
        weight: "1lb",
      },
      {
         id:48 ,
        img: Img2,
        label: "Cheese",
        price: "$5.00",
        weight: "1lb",
      },
      {
         id:49 ,
        img: Img3,
        label: "Yogurt",
        price: "$3.00",
        weight: "1lb",
      },
      {
         id: 50,
        img: Img4,
        label: "Butter",
        price: "$4.00",
        weight: "1lb",
      },
    ],
    Cooking: [
      {
         id: 51,
        img: Img1,
        label: "Olive Oil",
        price: "$4.00",
        weight: "1lb",
      },
      {
         id: 52,
        img: Img2,
        label: "Vinegar",
        price: "$2.00",
        weight: "1lb",
      },
      {
         id: 53,
        img: Img3,
        label: "Spices",
        price: "$3.00",
        weight: "1lb",
      },
      {
         id: 54,
        img: Img4,
        label: "Herbs",
        price: "$3.50",
        weight: "1lb",
      },
    ],
    Breakfast: [
      {
         id: 55,
        img: Img1,
        label: "Cereal",
        price: "$3.00",
        weight: "1lb",
      },
      {
         id: 56,
        img: Img2,
        label: "Pancakes",
        price: "$4.00",
        weight: "1lb",
      },
      {
         id: 57,
        img: Img3,
        label: "Oatmeal",
        price: "$3.50",
        weight: "1lb",
      },
      {
         id: 58,
        img: Img4,
        label: "Granola",
        price: "$4.00",
        weight: "1lb",
      },
    ],
    Beverage: [
      {
         id: 59,
        img: Img1,
        label: "Juice",
        price: "$2.50",
        weight: "1lb",
      },
      {
         id: 60,
        img: Img2,
        label: "Soda",
        price: "$2.00",
        weight: "1lb",
      },
      {
         id: 61,
        img: Img3,
        label: "Coffee",
        price: "$3.00",
        weight: "1lb",
      },
      {
         id: 62,
        img: Img4,
        label: "Tea",
        price: "$2.50",
        weight: "1lb",
      },
    ],
    "Health & Beauty": [
      {
         id: 63,
        img: Img1,
        label: "Shampoo",
        price: "$5.00",
        weight: "1lb",
      },
      {
         id: 64,
        img: Img2,
        label: "Conditioner",
        price: "$4.00",
        weight: "1lb",
      },
      {
         id: 65,
        img: Img3,
        label: "Soap",
        price: "$2.00",
        weight: "1lb",
      },
      {
         id: 66,
        img: Img4,
        label: "Lotion",
        price: "$3.50",
        weight: "1lb",
      },
    ],
  };
  const allItems = Object.values(items).flat();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleItemsCount(12);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems =
    selectedCategory === "All"
      ? allItems.filter((item) =>
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

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: "background.paper",
          py: 8,
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          height: "90vh",
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
            height: "80vh",
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
              fontSize: "3rem",
              letterSpacing: "0.05em",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)",
              whiteSpace: "nowrap",
            }}
          >
            Groceries Delivered in 90 Minutes
          </Typography>
          <Typography
            variant="h5"
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
                        }}
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
                          startIcon={<AddShoppingCart />}
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

      <Footer />
    </Box>
  );
};

export default Home;
