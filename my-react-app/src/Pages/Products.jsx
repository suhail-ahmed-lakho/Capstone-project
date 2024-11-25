import { Box, Grid, Tooltip, Typography, Autocomplete, TextField, IconButton, CircularProgress } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice'; // Adjust the path as necessary
import axios from "axios";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Products = () => {
  const [products, setProducts] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  const dispatch = useDispatch(); // Get the dispatch function
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        setProducts(data);
      } catch (error) {
        alert("there is an error");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); 
  };

  const handleViewDetails = (id) => {
    navigate(`/product/${id}`); 
  };

  return (
    <Grid container className="container" alignItems="stretch">
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
          <CircularProgress />
        </Box>
      ) : (
        products?.filter(product => 
          selectedCategory ? product.category === selectedCategory : true
        ).map(product => {
          return (
            <Grid item key={product.id} xs={12} md={3} sx={{ width: "250px", padding: "16px" }}>
              <Box sx={{ 
                border: '1px solid #ccc', 
                borderRadius: '8px', 
                padding: '16px', 
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)', 
                display: 'flex', 
                flexDirection: 'column', 
                height: '350px' 
              }}>
                <img src={product.image} alt={product.title} style={{ width: '100%', height: '200px', objectFit: 'contain', borderRadius: '8px' }} />
                <Tooltip title={product.title} placement="top">
                  <Typography 
                    variant="h6" 
                    component="p" 
                    sx={{ 
                      marginTop: '8px', 
                      flexGrow: 1, 
                      display: 'flex', 
                      alignItems: 'center', 
                      height: '40px', 
                      overflow: 'hidden', 
                      textOverflow: 'ellipsis', 
                      whiteSpace: 'nowrap' 
                    }}
                  >
                    {product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}
                  </Typography>
                </Tooltip>
                <hr />
                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '8px', flexShrink: 0 }}>
                  <IconButton aria-label="add to cart" onClick={() => handleAddToCart(product)}>
                    <AddShoppingCartIcon />
                  </IconButton>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="view" onClick={() => handleViewDetails(product.id)}>
                    <VisibilityIcon />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
          );
        })
      )}
    </Grid>
  );
};

export default Products;
