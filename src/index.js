import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { theme } from "./styles/theme";
import ReactGa from "react-ga4"
ReactGa.initialize("G-78FWT1LEM6")
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
