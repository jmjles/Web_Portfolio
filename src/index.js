import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { CssBaseline,ThemeProvider } from "@mui/material";
import { StyledEngineProvider , createTheme } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00E01A",
    },
    secondary: {
      main: "#D0FCB3",
    },
    background: {
      paper: "#013811",
      default: "#020703",
    },
    text: {
      primary: "#E8E9F3",
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
