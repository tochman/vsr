import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { withStyles } from "@mui/styles";
const WhiteTextTypography = withStyles({
  root: {
    color: "#bbb",
  },
})(Typography);
// const Copyright = () => {
//   return (
//     <WhiteTextTypography variant="body2">
//       {"Copyright © "}
//       {new Date().getFullYear()}
//       {" Vitterhetssällskapet Ressemblance."}
//     </WhiteTextTypography>
//   );
// };

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
        {/* <Copyright /> */}
      </Container>
    </Box>
  );
};

export default Footer;
