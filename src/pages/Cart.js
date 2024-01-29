import React, { useState } from 'react'
import useCartStore, { useAuthState, useCartChipStore } from '../hooks/store'
import { Box, Button, Divider, TextField, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from '../api/axios';
const Cart = () => {
  const { cartItems } = useCartStore();
  const userEmail = useAuthState((state) => state.userEmail);
  const firstName = useAuthState((state) => state.firstName);
  const lastName = useAuthState((state) => state.lastName);
  const authToken = useAuthState((state) => state.authToken);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: "auto",
    bgcolor: 'primary.light',
    boxShadow: 24,
    p: 4,
    borderRadius: 20,
  };
  const [address, setAddress] = useState("");

  var totalPrice = 0
  var totalQuantity = 0
  for (let i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i].unitPrice * cartItems[i].quantity;
    totalQuantity += cartItems[i].quantity;
  }

  const handleChange = (event) => {
    setAddress(event.target.value)
  }
  const handleCheckout = async (event) => {
    event.preventDefault()
    console.log(address)
    console.log(cartItems)
    const orderItems = cartItems.map(item => ({
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      productId: item.id
    }));
    console.log(orderItems)
    try {
      const response = await axios.post(
        '/api/user/purchase',
        {
          "customer": {
            firstName: firstName,
            lastName: lastName,
            email: userEmail
          },
          "order": {
            shippingAddress: address,
            totalPrice,
            totalQuantity
          },
          orderItems
        },
        {
          headers: {
            Authorization: `Bearer ${authToken}`
          }
        }
      );
      console.log(response);
    } catch (err) {

    }


  };

  const { increaseQuantity, decreaseQuantity, removeItemFromCart } = useCartStore();
  const decCounter = useCartChipStore((state) => state.decCounter)
  const incCounter = useCartChipStore((state) => state.incCounter)
  const onIncreaseQuantity = (productId) => {
    increaseQuantity(productId);
    incCounter()
  };

  const onDecreaseQuantity = (productId) => {
    decreaseQuantity(productId);
    decCounter()
  };

  const onRemoveItem = (productId) => {
    removeItemFromCart(productId);
    decCounter()
  };


  return (

    <Box sx={style}>
      <Typography id="modal-modal-title" sx={{ display: "flex", justifyContent: "center", fontWeight: "bold", marginBottom: "2px" }} variant="h3" component="h1">
        My Cart {<ShoppingCartIcon fontSize='large' sx={{ marginTop: "13px", ml: "10px" }} />}
      </Typography>
      <Divider></Divider>


      <Box>
        {cartItems.map((item) => (
          <>
            <Box sx={{ width: "100%", height: "120px", display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography id="modal-modal-title" color="primary.dark" sx={{ display: "flex", fontWeight: "bold", mt: "15px" }} variant="h4" component="h1">
                  {item.name}
                </Typography>
                <Typography id="modal-modal-title" color="primary.main" sx={{ display: "flex", fontWeight: "bold", mt: "4px" }} variant="h4" component="h1">
                  {item.unitPrice} Lek/each
                </Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Button onClick={() => onIncreaseQuantity(item.id)}><AddIcon fontSize='large' /></Button>
                <Typography color="primary.dark" variant="h5" component="h1" sx={{ display: "flex", alignItems: "center", fontWeight: "bold", px: "5px" }}>{item.quantity}</Typography>
                <Button onClick={() => onDecreaseQuantity(item.id)} sx={{ mr: "20px" }}><RemoveIcon fontSize='large' /></Button>
                <Button onClick={() => onRemoveItem(item.id)}><DeleteIcon fontSize='large' /></Button>
              </Box>
            </Box>
            <Divider />
          </>
        ))}
      </Box>
      {cartItems.length > 0 ?
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: "15px" }}>
          <TextField id="address" value={address} onChange={handleChange} autoComplete="address" noValidate label="Address" variant="outlined" type='address' required />
          <Typography id="modal-modal-title" color="primary.main" sx={{ display: "flex", justifyContent: "center", mt: "5px" }} variant="h4" component="h1">
            Total: {totalPrice} Lek
          </Typography>
          <Button onClick={handleCheckout} color="inherit" sx={{ fontWeight: 'bold', backgroundColor: "primary.button", borderRadius: '12px', color: "#fff" }}>Checkout</Button>
        </Box> :
        <Typography id="modal-modal-title" color="primary.dark" sx={{ display: "flex", justifyContent: "center", fontWeight: "bold", mt: "15px" }} variant="h4" component="h1">
          Cart Is Empty!
        </Typography>

      }
    </Box>
  )
}

export default Cart
