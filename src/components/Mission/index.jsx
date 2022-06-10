import React from "react";
import { CssBaseline, Typography, Container } from "@mui/material";
import { ReactComponent as FullLogo } from "../../assets/full_logo.svg";
import InterestForm from "../Agenda/InterestForm";

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
          Det finns så mycket att upptäcka och lära sig. Det är ett faktum som
          kan kännas lite överväldigande. Ingen av oss kan någonsin inhämta all
          världens kunskap och kunna “allt”. Det är helt enkelt omöjligt. Men vi
          kan alla lite då och då, när det känns rätt, expandera våra vyer och
          vidga våra horisonter.{" "}
        </Typography>

        <Typography variant="body1" gutterBottom>
          Att samlas i grupp under avslappnade former för att prata om
          intressanta ämnen, är ett trevligt och roligt sätt att lära. Det är
          det vi hoppas kunna erbjuda genom VSR och våra olika typer av
          aktiviteter. Vi vill erbjuda våra medlemmar en blandning av
          aktiviteter, workshops, och träffar i syfte att öka kunskapen inom
          många olika områden.{" "}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Det kan handla om litteratur, musik, film, etc. Men det kan även
          handla om så jordnära ämnen som modern dryckeskultur eller matlagning.{" "}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Vi tror att det finns många ämnen man kan "nörda" in i och växa som
          person.{" "}
        </Typography>

        <Typography variant="body1" style={{ fontWeight: "bold" }} gutterBottom>
          Om du har några idéer, är du välkommen att höra av dig.{" "}
        </Typography>
        <InterestForm strip={true} />
      </Container>
    </>
  );
};

export default Mission;
