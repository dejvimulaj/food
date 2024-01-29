import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import axios from '../api/axios';
import useCartStore, { useAuthState, useCartChipStore } from '../hooks/store'


const columns = [
  { field: '', headerName: '', width: 90 },
  { field: 'id', headerName: 'ID', width: 200 },
  {
    field: 'firstName',
    headerName: 'First Name',
    width: 350,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last Name',
    width: 350,
    editable: true,
  },
  {
    field: 'Email',
    headerName: 'Email',
    width: 350,
    editable: true,
  },

];

export default function Users() {

  const authToken = useAuthState((state) => state.authToken);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          '/api/customers',
          {
            headers: {
              Authorization: `Bearer ${authToken}`
            }
          }
        );
        setData(response?.data?._embedded.customers);
        console.log(response.data._embedded.customers);
      } catch (err) {
        // Handle errors if needed
        console.error('Error fetching data:', err);
      }
    };

    // Call the function to initiate the data fetching
    getData();
  }, []);

  const rows = data

  return (
    <Box sx={{}}>
      <Typography
        component="h1"
        variant="h3"
        align="center"
        color="primary.dark"
        gutterBottom
        sx={{ fontWeight: "bold", mt: "30px", mb: "70px" }}
      >
        Customers Table
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