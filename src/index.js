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
      main: 'rgba(0, 31, 65, 1)',
    },
    secondary: {
      main: '#0057C3',
    },
    white: {
      main: '#fff',
    },
    bonus: {
      main: 'rgba(6,147,227,1)',
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
