import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Provider from './Provider';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';


const darkTheme = createMuiTheme({
});


ReactDOM.render(
  <Provider>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
document.getElementById('root'));
