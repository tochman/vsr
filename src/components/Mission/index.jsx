import React from "react";
import { CssBaseline, Typography, Container } from "@mui/material";
import { ReactComponent as FullLogo } from "../../assets/full_logo.svg";
import InterestForm from '../Agenda/InterestForm'

const Mission = () => {
  return (
    <>
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <FullLogo />
        <Typography variant="h1" component="h1" gutterBottom>
          Föreningen För Utveckling och Förädling
        </Typography>

        <Typography variant="body1" gutterBottom>
          Vi strävar efter att erbjuda våra medlemmar en blanding av
          aktiviteter, workshops, och träffar i syfte att öka kunskapen inom en
          blandning av områden.{" "}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Det kan handla om litteratur, musik, film, etc. Men det kan även
          handla om så jordnära ämnen som modern dryckeskultyr eller matlagning.{" "}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Vi tror att det finns många ämnen man kan "nörda" in i och växa som
          person. {" "}
        </Typography>

        <Typography variant="body1" style={{fontWeight: 'bold'}} gutterBottom>
          Om du har några idéer, är du välkommen att höra av dig.{" "}
        </Typography>
        <InterestForm strip={true} />
      </Container>
    </>
  );
};

export default Mission;
