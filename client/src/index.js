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
  <ThemeProvider theme={theme}>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  </ThemeProvider>,
  document.getElementById('root')
);
