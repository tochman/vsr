import React from "react";
import { CssBaseline, Typography, Container } from "@mui/material";
import { ReactComponent as WorkshopLogo } from "../../assets/workshop_1.svg";
import InterestForm from './InterestForm'
const Agenda = () => {
  return (
    <>
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h1" component="h1" gutterBottom>
          Aktiviteter
        </Typography>
        <Typography variant="h3" component="h1" gutterBottom>
          <WorkshopLogo />
        </Typography>
        <Typography variant="body1" gutterBottom>
          Är du allmänt historieintresserad och vill lära dig att läsa och
          förstå gamla böcker, tidskrifter och dokument? Den äldre svenskan kan
          kännas främmande och svår. I tryckt form användes den svårlästa
          typsnittet fraktur, och i de handskrivna dokumenten är skrivstilen som
          hieroglyfer.
        </Typography>
        <Typography variant="body1" gutterBottom>
          I “Läs och förstå 1700-talet” lär vi oss genom praktiska övningar att
          läsa och förstå historiska dokument.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Vi träffas dagtid under 3 söndagar på Lerjedalens Café & Bistro
          (Kroksjövägen, 424 56 Gunnilse) och tillbringar ca 2 timmar ihop.
          Kaffe och smörgås ingår i priset som är 60 kr.
        </Typography>
        <InterestForm />
      </Container>
    </>
  );
};

export default Agenda;
