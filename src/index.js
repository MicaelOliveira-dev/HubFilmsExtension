import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/styles';
import  App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>    
    <App />
    <GlobalStyle/>
  </React.StrictMode>
);