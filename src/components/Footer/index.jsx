import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { withStyles } from "@mui/styles";
import InterestForm from '../Agenda/InterestForm'
const WhiteTextTypography = withStyles({
  root: {
    color: "#bbb",
  },
})(Typography);

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "primary.main",
      }}
    >
      <Container maxWidth="sm">
        <WhiteTextTypography variant="h3">
          Aktiviterter, Workshops, Studieträffar.
        </WhiteTextTypography>
        <WhiteTextTypography variant="body1">
          Är du intresserad? Kontakta oss för mer information. 
        </WhiteTextTypography>
      </Container>
    </Box>
  );
};

export default Footer;
