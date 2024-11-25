import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Button, 
  CircularProgress, 
  Grid, 
  CardContent, 
  CardMedia, 
  Rating, 
  Chip,
  Skeleton,
  Alert,
  Container,
  Divider,
  IconButton,
  Tooltip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowBack } from '@mui/icons-material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice'; 

const ProductImage = styled(CardMedia)(({ theme }) => ({
  height: 400,
  backgroundSize: 'contain',
  backgroundColor: 'transparent',
}));

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(data);
        setError(null);
      } catch (err) {
        console.error("Error fetching product details:", err);
        setError("Failed to load product details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
  };

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ mt: 4 }}>
          <Skeleton variant="rectangular" width="100%" height={400} />
          <Skeleton variant="text" sx={{ mt: 2 }} />
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="sm">
        <Alert severity="error" sx={{ mt: 4 }}>{error}</Alert>
        <Button 
          variant="contained" 
          startIcon={<ArrowBack />} 
          onClick={() => navigate(-1)} 
          sx={{ mt: 2 }}
        >
          Go Back
        </Button>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container maxWidth="sm">
        <Alert severity="info" sx={{ mt: 4 }}>Product not found</Alert>
        <Button 
          variant="contained" 
          startIcon={<ArrowBack />} 
          onClick={() => navigate(-1)} 
          sx={{ mt: 2 }}
        >
          Go Back
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Button 
          variant="outlined" 
          startIcon={<ArrowBack />} 
          onClick={() => navigate(-1)} 
          sx={{ mb: 4 }}
        >
          Back to Products
        </Button>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ProductImage
              image={product.image}
              title={product.title}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h4" component="h1" gutterBottom>
                {product.title}
              </Typography>
              <Chip label={product.category} color="primary" sx={{ mb: 2 }} />
              <Typography variant="h5" color="primary" gutterBottom>
                ${product.price.toFixed(2)}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Rating value={product.rating.rate} precision={0.1} readOnly />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  ({product.rating.count} reviews)
                </Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body1" paragraph>
                {product.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={handleAddToCart}
                size="large"
                sx={{ mt: 2 }}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductDetails;

