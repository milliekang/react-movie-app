import React from 'react';
import App from './App';
import ReactDOM from "react-dom/client"
import { ThemeProvider } from 'styled-components';
import './style.css';



window.React = React

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);


const darkTheme = {
  textColor : "whitesmoke",
  backgroundColor:"#111"
}

const lightColor = {
  textColor : "#111",
  backgroundColor:"whitesmoke"
}

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}><App /></ThemeProvider>
  </React.StrictMode>
);

