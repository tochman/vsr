import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CssBaseline, Box, Typography, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./mui";
import { ReactComponent as FullLogo } from "./assets/full_logo.svg";

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
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h1" component="h1" gutterBottom>
            Utveckling och Förädling
          </Typography>
          <Typography variant="h3" component="h1" gutterBottom>
            Vitterhet...
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Vitterhet</strong> är ett ålderdomligt ord för humanistisk
            bildning, poesi, skönlitterär prosa och retorik. Under 1700-talet
            antog begreppet en smalare innebörd av humanistisk bildning i förening med
            skönhetssinne.
          </Typography>
          <Typography variant="h3" component="h1" gutterBottom>
            Sällskap...
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Sällskap</strong> är att vara tillsammans. Ordet används
            också i sammanhang där ett antal människor som enats runt en idé och
            förenat arbetar för ett gemensamt mål och är då synonymt med orden
            "förening" eller "klubb".
          </Typography>
          <Typography variant="h3" component="h1" gutterBottom>
            Ressemblance...
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Ressemblance</strong> är ett franskt ord och betyder{" "}
            <strong>"likhet"</strong>. I det här sammanhaget pekar ordet på
            betydelsen av att se till det som förenar hellre än det som skiljer
            åt. Nyfikenhet, vetgirighet, kunskapstörst är det som driver
            personlig utveckling och förädling.
          </Typography>
          <FullLogo />
          <Typography variant="body1">Mer information kommer...</Typography>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
