import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { useAuthState } from '../hooks/store';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Bytebite
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [
  {
    id: 1,
    image: "/foodimages/pasta.jpg",
    txt: "The taste of Italy cusine, one click away",

  },
  {
    id: 2,
    image: "/foodimages/porksalad.jpg",
    txt: "We call our salads 'Delicious Messes'",

  },
  {
    id: 3,
    image: "/foodimages/shrimprice.jpg",
    txt: "You find a more delicious shrimp fried rice, you call us",

  },
  {
    id: 4,
    image: "/foodimages/salmon.jpg",
    txt: "The most delicious Salmon you can find",

  },
  {
    id: 5,
    image: "/foodimages/pule.jpeg",
    txt: "Simplicity is not a word we use, especially with our chicken",

  },
  {
    id: 6,
    image: "/foodimages/tunasalad.jpg",
    txt: "The freshest tuna caught and delivered to your plate",

  },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Main() {
  const authToken = useAuthState((state) => state.authToken)
  return (
    <div>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.secondary"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Welcome to ByteBite
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Where you meet the delight of healthy indulgence!
              Best nutrition for the best engineers!
            </Typography>
            {authToken && authToken.length > 0 ? <></> :
              <Stack
                sx={{ pt: 4 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained" sx={{ borderRadius: "16px", color: "#fff" }}>
                  <Link to="login" style={{ textDecoration: 'none', color: "#fff" }}>
                    Login to order
                  </Link>
                </Button>
                <Typography variant="h6" align="center" color="text.secondary" paragraph>
                  or
                </Typography>
                <Button variant="outlined" sx={{ borderRadius: "16px" }}>
                  <Link to="signup" style={{ textDecoration: 'none', color: "inherit" }}>
                    Signup to order
                  </Link>
                </Button>
              </Stack>

            }
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={8} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#dcedc8', borderRadius: "20px" }}

                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={card.image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h6" component="h2" fontWeight="bold" align="center" color="text.secondary">
                      {card.txt}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          And even more plates after you login!
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          With love
        </Typography>
        <Copyright />
      </Box>

    </div>
  );
}