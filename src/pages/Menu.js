import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import products from '../hooks/products';
import useCartStore, { useAuthState } from '../hooks/store';
import { useCartChipStore } from '../hooks/store';
import { Snackbar } from '@mui/material';
import axios from '../api/axios';
const Menu = () => {
    const {addItemToCart} = useCartStore()
    const productsForMenu = products;
    const incCounter = useCartChipStore((state)=> state.incCounter)
    const [open, setOpen] = useState(false);
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
    
      setOpen(false);
    };
    const [data, setData] = useState([]);

    useEffect(() => {
      const getData = async () => {
        try {
          const response = await axios.get('/api/products');
          setData(response?.data?._embedded.products);
          console.log(response.data._embedded.products);
        } catch (err) {
          // Handle errors if needed
          console.error('Error fetching data:', err);
        }
      };
  
      // Call the function to initiate the data fetching
      getData();
    }, []);


  return (
    <>
      <main>
        <Box
          sx={{
            pt: 4,
          }}
        >
          <Container maxWidth="sm">
          <Snackbar 
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Added to cart"
        color='primary'
      />
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="primary.dark"
              gutterBottom
              sx={{fontWeight:"bold"}}
            >
              Our Lovely Menu
            </Typography>
           
          </Container>
        </Box>
        <Container sx={{ py: 5 }} maxWidth="xl">
          <Grid container spacing={6}>
            { data.map((product) => (
              <Grid item key={product.id} xs={8} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor:"#dcedc8", borderRadius:"30px" }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={product.imageUrl}
                  />
                  <CardContent sx={{ flexGrow: 1, display:"flex", justifyContent:"space-between" }}>
                    <Typography gutterBottom variant="h5" component="h2" sx={{fontWeight:"bold"}}>
                      {product.name}
                    </Typography>
                    <Typography color="primary.dark" variant="h5" sx={{marginRight:"10px", fontWeight:"bold"}}>
                      {product.unitPrice}Lek
                    </Typography>
                  </CardContent>
                  <CardActions sx={{display:"flex", justifyContent:"center", marginBottom: "12px"  }}>
                    <Button  sx={{fontWeight:'bold', backgroundColor: "primary.button", borderRadius: '12px', color:"#fff"}} size="large" 
                    onClick={() =>{
                      addItemToCart(product)
                      incCounter()
                      setOpen(true)
                    } }>+ Add To Cart</Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    
    </>


  )
}

export default Menu
