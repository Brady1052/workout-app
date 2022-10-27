import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Layout/Navbar/Navbar';
import Exercises from './pages/Exercises';
import Workouts from './pages/Workouts';
import Home from './pages/Home';
import 'fontsource-roboto';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </>
  );
}

export default App;
