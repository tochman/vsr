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
          Vitterhet är ett historiskt begrepp som främst användes under 1700-
          och 1800-talen för att beskriva humanistisk bildning, poesi,
          skönlitterär prosa och retorik. Det betonade vikten av kreativt och
          kritiskt tänkande samt estetisk känslighet och förmågan att uttrycka
          sig väl, både i tal och skrift. Även om begreppet vitterhet inte
          längre är lika vanligt, har Vitterhetssällskapet Ressemblance valt att
          använda det i sitt namn för att återkoppla till det kulturella och
          intellektuella arvet från tidigare tider.{" "}
        </Typography>

        <Typography variant="body1" gutterBottom>
          I en värld full av kunskap och upptäckter kan det kännas
          överväldigande att försöka ta in allt. Ingen av oss kan någonsin
          inhämta all världens kunskap och kunna "allt". Men vi kan alla, när
          det känns rätt, expandera våra vyer och vidga våra horisonter. Det är
          just detta som Vitterhetssällskapet Ressemblance strävar efter att
          erbjuda sina medlemmar.{" "}
        </Typography>
        <Typography variant="body1" gutterBottom>
          VSR:s mål är att skapa en plattform där människor kan samlas i
          avslappnade former för att prata om intressanta ämnen och lära sig av
          varandra. Genom att erbjuda en blandning av aktiviteter, workshops och
          träffar hoppas föreningen öka kunskapen inom många olika områden,
          såsom litteratur, musik, film, men även mer jordnära ämnen som modern
          dryckeskultur eller matlagning.{" "}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Vitterhetssällskapet Ressemblance är medvetet om att vår dagsfärsk
          kunskap ofta bygger på gamla tiders idéer som förädlats och
          moderniserats. Genom att uppskatta och utforska vitterhetens rika
          historia kan medlemmarna i VSR vidga sina perspektiv och förstå
          världen på ett mer nyanserat och berikande sätt.
        </Typography>
        <Typography variant="body1" gutterBottom>
          VSR tror att det finns många ämnen att "nörda" in sig i och att genom
          att utforska dessa kan man växa som person. Genom att ansluta sig till
          Vitterhetssällskapet Ressemblance får medlemmarna möjlighet att
          fördjupa sig i sina intressen och upptäcka nya passioner, vilket i sin
          tur bidrar till personlig utveckling och berikande av deras liv.
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
