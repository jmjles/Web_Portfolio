import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import {CssBaseline,} from '@material-ui/core';
import {MuiThemeProvider,createMuiTheme,StylesProvider} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#14213D"
    },
    secondary: {
      main: "#FCA311"
    },
    background: {
      paper: "#E5E5E5",
      default: "#FFFFFF"
    },
    text: {
      primary: "#000000"
    }
  }
  
});
ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline>
            <StylesProvider injectFirst>
                <App />
            </StylesProvider>
            
        </CssBaseline>
    </MuiThemeProvider>, 
document.getElementById('root'));
