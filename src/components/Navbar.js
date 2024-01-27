import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';
// import { IconButton } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useCartChipStore } from '../hooks/store';

export default function Navbar() {

  const [loggedIn, setLoggedIn] = useState(true);
  const cartCounter= useCartChipStore((state)=>state.cartCounter)

  return (
    loggedIn? 
<Box sx={{ justifyContent: 'space-between' }}>
<AppBar position="static" >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight:"bold" }}>
      <Link to="" style={{textDecoration: 'none', color:"#000000"}}>
          ByteBite
          </Link>
        </Typography>
        <Box sx={{ flexGrow: 1, marginLeft: "60px" }}>
        <Button color="inherit" sx={{fontWeight:'bold', marginRight:"20px", backgroundColor: "primary.button", borderRadius: '12px'}}>          
        <Link to="menu" style={{textDecoration: 'none', color:"#000000"}}>
            Menu
          </Link>
          </Button>
          <Button color="inherit" sx={{fontWeight:'bold', marginRight:"20px", backgroundColor: "primary.button", borderRadius: '12px'}}>          
        <Link to="about" style={{textDecoration: 'none', color:"#000000"}}>
            About
          </Link>
          </Button>
          <Button color="inherit" sx={{fontWeight:'bold', marginRight:"20px", backgroundColor: "primary.button", borderRadius: '12px'}}>          
        <Link to="orders" style={{textDecoration: 'none', color:"#000000"}}>
            Orders
          </Link>
          </Button>
          <Button color="inherit" sx={{fontWeight:'bold', marginRight:"20px", backgroundColor: "primary.button", borderRadius: '12px'}}>          
        <Link to="users" style={{textDecoration: 'none', color:"#000000"}}>
            Users
          </Link>
          </Button>
        </Box>

        <div>
        <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="primary.dark"
                sx={{marginRight:"4px"}}
              >
                <Badge badgeContent={cartCounter} color="error">
                <ShoppingCartIcon fontSize='xl' />

                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="primary.dark"
              >
                <AccountCircle fontSize='xl' />
              </IconButton>
            </div>
      </Toolbar>
    </AppBar>
    </Box> :
    <Box sx={{ justifyContent: 'space-between' }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight:"bold" }}>
      <Link to="" style={{textDecoration: 'none', color:"#000000"}}>
          ByteBite
          </Link>
        </Typography>
        <Typography variant="h6" component="div" color="primary.dark" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
         Please Login or Signup to order our delicious food!
        </Typography>
        
        <Button color="inherit" sx={{fontWeight:'bold', marginRight:"4px", backgroundColor: "primary.button", borderRadius: '12px'}}>          
        <Link to="login" style={{textDecoration: 'none', color:"#000000"}}>
            Login
          </Link>
          </Button>
        <Button color="inherit"  sx={{fontWeight:'bold', backgroundColor: "primary.button", borderRadius: '12px'}}>
        <Link to="signup" style={{textDecoration: 'none', color:"#000000"}}>
            Signup
          </Link>
        </Button>

      </Toolbar>
    </AppBar>
  </Box>
  );
}
