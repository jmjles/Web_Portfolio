import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { StyledEngineProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";

const breakpoint = (bp, min = true, unit = "px") =>
  `@media (${min ? "min" : "max"}-width: ${bp}${unit})`;
const theme = createTheme({
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

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <StyledEngineProvider injectFirst>
        <Router>
          <App />
        </Router>
      </StyledEngineProvider>
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById("root")
);
