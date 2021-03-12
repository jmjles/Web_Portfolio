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
