import React from "react";
import { CssBaseline, Typography, Container, Link } from "@mui/material";
import { ReactComponent as FullLogo } from "../../assets/full_logo.svg";
const LandingPage = () => {
  return (
    <>
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h1" component="h1" gutterBottom>
          Föreningen För Utveckling och Förädling
        </Typography>

        <Typography variant="body1" gutterBottom>
          <strong>Vitterhetssällskapet Ressemblance (VSR)</strong> är en
          förening som syftar till att främja personlig utveckling och förädling
          genom att utforska och dela kunskap om en mängd olika ämnen. Genom att
          fokusera på det som förenar oss och vår gemensamma nyfikenhet skapar
          VSR en inbjudande och givande atmosfär för sina medlemmar.
        </Typography>
        <Typography variant="h3" component="h1" gutterBottom>
          Vitterhet...
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Vitterhet</strong> är ett ålderdomligt ord för humanistisk
          bildning, poesi, skönlitterär prosa och retorik. Under 1700-talet
          antog begreppet en smalare innebörd av humanistisk bildning i förening
          med skönhetssinne.
        </Typography>
        <Typography variant="h3" component="h1" gutterBottom>
          Sällskap...
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Sällskap</strong> är att vara tillsammans. Ordet används också
          i sammanhang där ett antal människor som enats runt en idé och förenat
          arbetar för ett gemensamt mål och är då synonymt med orden "förening"
          eller "klubb".
        </Typography>
        <Typography variant="h3" component="h1" gutterBottom>
          Ressemblance...
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Ressemblance</strong> är ett franskt ord och betyder{" "}
          <strong>"likhet"</strong>. I det här sammanhaget pekar ordet på
          betydelsen av att se till det som förenar hellre än det som skiljer
          åt. Nyfikenhet, vetgirighet, kunskapstörst är det som driver personlig
          utveckling och förädling.
        </Typography>
        <FullLogo />
        <Typography variant="body1">
          Vi strävar efter att erbjuda våra medlemmar en blanding av
          aktiviteter, workshops, och träffar i syfte att öka kunskapen inom en
          blandning av områden.{" "}
          <Link href="mission" underline="none">
            Läs mer...
          </Link>{" "}
        </Typography>
      </Container>
    </>
  );
};

export default LandingPage;
