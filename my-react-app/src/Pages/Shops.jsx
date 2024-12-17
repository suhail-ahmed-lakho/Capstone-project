import React from 'react';
import { Container, Grid, Box, Typography, Avatar } from '@mui/material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Footer from '../components/Footer';

const shops = [
  {
    name: 'Medicine',
    logo: 'https://storage.googleapis.com/a1aa/image/60jnPKZ7shL9G10AijTpcUKli2LdeBwcczm4mX4dW7yy0q9JA.jpg',
    address: 'East Avenue 1743, West Tower, New York, Manhattan, 12332, United States'
  },
  {
    name: 'Gadget',
    logo: 'https://storage.googleapis.com/a1aa/image/i37djgxZ2cJnJ9z8T3e5S8VxxTp9urBgFAmNyThwKUHu0q9JA.jpg',
    address: '1740 Bedford Street, Alabama, Michigan, 35203, USA'
  },
  {
    name: 'Books Shop',
    logo: 'https://storage.googleapis.com/a1aa/image/YxR1oSRsHV6iKlKq10QN7niOWPYOVfHhnS1ld0sq1ftjpV7TA.jpg',
    address: '44444, California, Zurich, 8021, Switzerland'
  },
  {
    name: 'Grocery Shop',
    logo: 'https://storage.googleapis.com/a1aa/image/HxZTpriCZ4baJtfzmQyefgtnnWkQ5U5OBRnXrb8dXgbETr2nA.jpg',
    address: '1986 Spinnaker Lane, Illinois, Freeport, 61032, USA'
  },
  {
    name: 'Bakery Shop',
    logo: 'https://storage.googleapis.com/a1aa/image/fz639aHtuv0RfkR2qXeT1VK51MIbK5B8N4Q1ib2XfNP0lWtPB.jpg',
    address: '4422 Fort Street, Carolina, Rocky Mount, 27801, USA'
  },
  {
    name: 'Makeup Shop',
    logo: 'https://storage.googleapis.com/a1aa/image/Bs0u38zgYNJlNRA9sv6rjvKPhe0Vf5tblce0wpJfUNyeLtafE.jpg',
    address: '2960 Rose Avenue, Louisiana, Metairie, 70001, USA'
  },
  {
    name: 'Bags Shop',
    logo: 'https://storage.googleapis.com/a1aa/image/lsaznhz5DIp9P5oGe3xtiqLQA1DzxOrCGi2PheOeufwYmWtPB.jpg',
    address: '1740 Bedford Street, Alabama, Michigan, 35203, USA'
  },
  {
    name: 'Clothing Shop',
    logo: 'https://storage.googleapis.com/a1aa/image/i8Jtspn53WY1FBZ0y1haCgzI7eq43Jwh6fJstbx3QJlgpV7TA.jpg',
    address: '4885 Spring Street, Illinois, Lincoln, 62656, USA'
  },
  {
    name: 'Furniture Shop',
    logo: 'https://storage.googleapis.com/a1aa/image/fKEUCNxMfQobIU7pJz9IWsC59LJeJOUefSpjVcqZWbNhMtafE.jpg',
    address: '588 Finwood Road, New Jersey, East Dover, 08753, USA'
  }
];

const Shops = () => {
  return (
    <Box>
      <Container sx={{ mt: 5 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
        All Shops
      </Typography>
      <Grid container spacing={3}>
        {shops.map((shop, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #e3e3e3',
                borderRadius: 2,
                p: 2,
                mb: 2
              }}
            >
              <Avatar
                src={shop.logo}
                alt={`${shop.name} logo`}
                sx={{ width: 50, height: 50, mr: 2 }}
              />
              <Box>
                <Typography variant="h6" sx={{ fontSize: '1.25rem', m: 0 }}>
                  {shop.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {shop.address}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
     
    </Container>
    <Footer />
    </Box>
     

  );
};

export default Shops;
