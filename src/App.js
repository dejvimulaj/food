import './App.css';
import { Route, Routes} from "react-router-dom";
import Layout from './Layout';
import Menu from './pages/Menu';
import Login from './pages/Login';
import About from './pages/About';
import Main from './pages/Main';
import Orders from './pages/Orders';
import Users from './pages/Users';
import Cart from './pages/Cart';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import SignUp from './pages/Signup';
function App() {
  
const theme = createTheme({
  palette: {
    background:{
      default: '#f1f8e9'
    },
    primary: {
      main: '#8bc34a',
      dark: "#558b2f",
      light: '#dcedc8',
      button: '#7cb342'
    },
    secondary:{
        main: '#fafafa',
        light: "#dcedc8"
    },
    text:{
      secondary: '#33691e'
    }
  },
});
  
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
        <Routes>
          <Route path='/' element={<Layout/>}>
            {/** UNPROTECTED ROUTES */}
              <Route path='' element={<Main/>}></Route>
              <Route path='menu' element={<Menu/>}></Route>
              <Route path='about' element={<About/>}></Route>
              <Route path='login' element={<Login/>}></Route>
              <Route path='signup' element={<SignUp/>}></Route>

              {/**AUTHORIZED ROUTES */}
              <Route path='orders' element={<Orders/>}></Route>
              <Route path='users' element={<Users/>}></Route>
              <Route path='cart' element={<Cart/>}></Route>
          </Route>
          </Routes> 

    </ThemeProvider>
  );
}

export default App;

  //home
  //menu
  //orders
  //users
  //cart
  //login and signup
