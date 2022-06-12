import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#ffffff",
        main: "#d4c3acff",
        dark: "#ffda3dff",
        contrastText: "#363636ff",
      },
      secondary: {
        light: "#e8ddd9ff",
        main: "#eacf75ff",
        dark: "#d0ad51ff",
        contrastText: "#0f0f0fff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height="100vh" display="flex" flexDirection="column">
        <Router>
          <Navbar />
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
          <Footer />
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
