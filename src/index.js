import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { WorkoutsContextProvider } from './context/workouts-context';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(0, 0, 0)',
    },
    secondary: {
      main: '#e2700b',
    },
    white: {
      main: '#fff',
    },
    bonus: {
      main: '#d16a0f',
    },
  },
});
root.render(
  <ThemeProvider theme={theme}>
    <WorkoutsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WorkoutsContextProvider>
  </ThemeProvider>
);
