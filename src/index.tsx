import React from 'react';
import App from './App';
import ReactDOM from "react-dom/client"
import { ThemeProvider } from 'styled-components';
import './style.css';



window.React = React

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

