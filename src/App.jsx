import React from "react";
import { Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./mui";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Agenda from "./components/Agenda";
import Mission from './components/Mission'
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="mission" element={<Mission />} />
        </Routes>

        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
