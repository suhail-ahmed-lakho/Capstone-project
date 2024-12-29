import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const errorImageUrl = "https://illustrations.popsy.co/gray/error-404.svg";
const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#f8f9fa',
        pt: '64px' // Account for header height
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: 'center',
            py: 8,
            px: 2,
          }}
        >
          <Box
            component="img"
            src={"https://illustrations.popsy.co/gray/error-404.svg"}
            alt="404 Error"
            sx={{
              maxWidth: '100%',
              height: 'auto',
              maxHeight: 300,
              mb: 4,
              animation: 'float 3s ease-in-out infinite',
              '@keyframes float': {
                '0%, 100%': {
                  transform: 'translateY(0)',
                },
                '50%': {
                  transform: 'translateY(-20px)',
                },
              },
            }}
          />
          
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              color: '#2d3436',
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' }
            }}
          >
            Oops! Page Not Found
          </Typography>
          
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              mb: 4,
              maxWidth: 600,
              mx: 'auto',
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}
          >
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track!
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/')}
              sx={{
                bgcolor: 'green',
                px: 4,
                py: 1.5,
                '&:hover': {
                  bgcolor: 'darkgreen',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              Back to Home
            </Button>
            
            <Button
              variant="outlined"
              size="large"
              onClick={() => navigate(-1)}
              sx={{
                color: 'green',
                borderColor: 'green',
                px: 4,
                py: 1.5,
                '&:hover': {
                  borderColor: 'green',
                  bgcolor: 'rgba(0, 128, 0, 0.08)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease'
              }}
            >
              Go Back
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ErrorPage;