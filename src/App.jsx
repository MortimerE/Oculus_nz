import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import BaseRoutes from "./navigation/BaseRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { AppContextProvider } from "./contexts/AppContext";
import React, { useContext } from "react";

const theme = createTheme({
  palette: {
    background: {
      default: "#000000",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <Router>
          <Box display="flex" flexDirection="column" minHeight="100vh">
            {/* <Box> */}
            <NavBar />
            {/* </Box> */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
                marginTop: "-12vh",
              }}
              flexgrow={1}
            >
              <div
                id="scroll-container"
                style={{
                  width: "100%",
                  height: "100vh",
                  // position: 'relative',
                  overflowY: "scroll",
                  // display: "flex",
                  // flexDirection: "column",
                  // alignItems: "center",
                  scrollSnapType: "y mandatory",
                }}
              >
                <BaseRoutes />
                <Box sx={{ scrollSnapAlign: "end" }}>
                  <Footer />
                </Box>
              </div>
            </div>
          </Box>
        </Router>
      </AppContextProvider>
    </ThemeProvider>
  );
};

export default App;
