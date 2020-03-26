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
      main: "#252628"
    },
    secondary: {
      main: "#598288"
    },
    background: {
      paper: "#DCE7E0",
      default: "#B7CBCA"
    },
    text: {
      primary: "#181C20"
    }
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
