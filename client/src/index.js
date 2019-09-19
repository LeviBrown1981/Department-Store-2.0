import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, } from 'react-router-dom';
import { ThemeProvider, } from 'styled-components';
import App from './App';
import "semantic-ui-css/semantic.min.css";

const theme = {
  fg: 'white',
  bg: 'black',
};

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>,
  </BrowserRouter>,
  document.getElementById('root')
);
