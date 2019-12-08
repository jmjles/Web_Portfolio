import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {CssBaseline} from '@material-ui/core';
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core';

const theme = createMuiTheme();
ReactDOM.render(
    <MuiThemeProvider>
        <CssBaseline>
            <App />
        </CssBaseline>
    </MuiThemeProvider>, 
document.getElementById('root'));
