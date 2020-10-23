import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { CssBaseline } from "@material-ui/core";
import {
  MuiThemeProvider,
  createMuiTheme,
  StylesProvider
} from "@material-ui/core";
import { BrowserRouter as Router } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#363946",
    },
    secondary: {
      main: "#3E92CC",
    },
    background: {
      paper: "#D6EAFF",
      default: "#C9E3F8",
    },
    text: {
      primary: "#363946",
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <CssBaseline>
      <StylesProvider injectFirst>
        <Router>
          <App />
        </Router>
      </StylesProvider>
    </CssBaseline>
  </MuiThemeProvider>,
  document.getElementById("root")
);
