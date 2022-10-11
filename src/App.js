import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Layout/Navbar';
import Exercises from './pages/Exercises';
import Workouts from './pages/Workouts';
import 'fontsource-roboto';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </>
  );
}

export default App;
