import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import Login from '../pages/Login';
// import { IconButton } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Menu, MenuItem, Modal } from '@mui/material';
import { useAuthState, useCartChipStore } from '../hooks/store';
import Cart from '../pages/Cart';

export default function Navbar() {
  const {logOut } = useAuthState();
  const authToken  = useAuthState((state)=>state.authToken)
  const userRole  = useAuthState((state)=>state.userRole)
  const cartCounter= useCartChipStore((state)=>state.cartCounter)
  const [open, setOpen] = React.useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);
  const navigate = useNavigate()

  React.useEffect(() => {
    console.log(authToken)
    console.log(userRole)
  }, [authToken, userRole]);
  

  return (
    JSON.stringify(authToken.length)>0? 
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
        <Link to="about" style={{textDecoration: 'none', color:"#000000"}}>
            About
          </Link>
          </Button>
        <Button color="inherit" sx={{fontWeight:'bold', marginRight:"20px", backgroundColor: "primary.button", borderRadius: '12px'}}>          
        <Link to="menu" style={{textDecoration: 'none', color:"#000000"}}>
            Menu
          </Link>
          </Button>
          {userRole=="ADMIN"?
          <>
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

          </>:<></>

          }
          
        </Box>

        <div>
        <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="primary.dark"
                sx={{marginRight:"4px"}}
                onClick={handleModalOpen}
              >
                <Badge badgeContent={cartCounter} color="error">
                <ShoppingCartIcon fontSize='xl' />

                </Badge>
              </IconButton>
        <Modal
              open={open}
              onClose={handleModalClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              >    
              <Cart/>
      </Modal>
              <IconButton
                size="large"
                id='logout'
                color="primary.dark"
                onClick={()=>{
                    logOut()
                    navigate('/login')
                }}
              >
                <Typography sx={{fontWeight:'bold', mt:"2px", mr:"2px"}}>LOGOUT</Typography>
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
        
        <Button onClick={() => {
          console.log({"authToken":authToken})
        }} color="inherit" sx={{fontWeight:'bold', marginRight:"4px", backgroundColor: "primary.button", borderRadius: '12px'}}>          
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
