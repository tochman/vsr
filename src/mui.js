import { createTheme } from "@mui/material/styles";

const headerFont = "'IM Fell English SC', serif";
const primaryFont = "'Fira Sans', sans-serif";
const theme = createTheme({
  palette: {
    primary: {
      main: "#2E3B55"
    },
    text: {
      primary: "#42526e",
    },
  },
  typography: {
    fontFamily: primaryFont,
    h1: {
      fontFamily: headerFont,
      fontSize: 34,
    },
    h3: {
      fontFamily: headerFont,
      fontSize: 28,
    },
    button: {
      textTransform: "none",
    },
  },
});

export { theme };
