import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import BaseRoutes from "./navigation/BaseRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';

const theme = createTheme({
  palette: {
    background: {
      default: '#000000',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Box>
            <NavBar />
          </Box>
          <div style={{display:"flex", flexDirection: 'column', width: '100%', alignItems: 'center'}} flexgrow={1}>
            <BaseRoutes />
          </div>
          <Box>
            <Footer />
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
};

export default App;
