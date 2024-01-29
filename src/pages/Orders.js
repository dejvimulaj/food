import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid} from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import axios from '../api/axios';

const columns = [
  { field: '', headerName: '', width: 90 },
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'orderTrackingNumber',
    headerName: 'Tracking Number',
    width: 350,
    editable: true,
  },
  {
    field: 'totalQuantity',
    headerName: 'Total Quantity',
    width: 150,
    editable: true,
  },
  {
    field: 'totalPrice',
    headerName: 'Total Price',
    width: 150,
    editable: true,
  },
  {
    field: 'shippingAddress',
    headerName: 'Shipping Address',
    sortable: false,
    width: 350,
  },
  {
    field: 'orderItems.id',
    headerName: 'Id',
    sortable: false,
    width: 150,
  },
  {
    field: 'orderItems.productId',
    headerName: 'Product Quantity',
    sortable: false,
    width: 150,
  },
  {
    field: 'orderItems.quantity',
    headerName: 'Product Quantity',
    sortable: false,
    width: 150,
  },
];

export default function Orders() {

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('/api/orders');
        setData(response?.data?._embedded.orders);
        console.log(response.data._embedded.orders);
      } catch (err) {
        // Handle errors if needed
        console.error('Error fetching data:', err);
      }
    };

    // Call the function to initiate the data fetching
    getData();
  }, []);

  const rows= data

  return (
<Box sx={{}}>
<Typography
              component="h1"
              variant="h3"
              align="center"
              color="primary.dark"
              gutterBottom
              sx={{fontWeight:"bold", mt:"30px", mb:"70px"}}
            >
              Orders Table
            </Typography>
    <Box sx={{ height: 400, width: '100%', }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>

</Box>
  );
}