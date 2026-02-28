import { createTheme } from "@mui/material";
import { breakpoint } from "../utils";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ADD8FF",
    },
    secondary: {
      main: "#339CFF",
    },
    background: {
      paper: "rgba(255, 255, 255, 0)",
      default: "#fff",
    },
  },
  typography: {
    fontSize: "16px",
    h1: {
      fontSize: "2.5rem",
      [breakpoint(990)]: {
        fontSize: "3rem",
      },
    },
    h2: {
      fontSize: "2.3rem",
      [breakpoint(990)]: {
        fontSize: "2.8rem",
      },
    },
    h3: { fontSize: "2rem" },
    h4: { fontSize: "2.5rem" },
    body1: {
      fontSize: "1.2rem",
    },
    button: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiSvgIcon: {
      defaultProps: {
        fontSize: "64px",
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          fontSize: "64px",
        },
      },
    },
  },
});
