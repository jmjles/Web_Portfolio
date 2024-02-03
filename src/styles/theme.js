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
    h1: {
      fontSize: "36px",
      [breakpoint(990)]: {
        fontSize: "64px",
      },
    },
    h2: {
      fontSize: "32px",
      [breakpoint(990)]: {
        fontSize: "48px",
      },
    },
    h3: { fontSize: "24px" },
    h4: { fontSize: "48px" },
    body1: {
      fontSize: "16px",
      [breakpoint(990)]: {
        fontSize: "24px",
      },
    },
    button: {
      fontSize: "16px",
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
