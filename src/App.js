import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Layout/Navbar';
import Exercises from './pages/Exercises';
import Workouts from './pages/Workouts';
import 'fontsource-roboto';
import Typography from '@mui/material/Typography';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import createMuiTheme from '@mui/material/styles/createTheme';
const linksArray = [
  'Exercises',
  'Workouts',
  'Create Exercise',
  'Create Workout',
];
function App() {
  const theme = createMuiTheme({
    typography: {
      h1: { fontSize: '50rem' },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <NavBar links={linksArray} />
      <Routes>
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
