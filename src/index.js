import "./styles/index.css";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import { theme } from "./styles/theme";
import ReactGa from "react-ga4";
import { createRoot } from "react-dom/client";
ReactGa.initialize("G-78FWT1LEM6");

const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <StyledEngineProvider injectFirst>
        <Router>
          <App />
        </Router>
      </StyledEngineProvider>
    </CssBaseline>
  </ThemeProvider>,
);
