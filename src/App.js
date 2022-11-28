import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Layout/Navbar/Navbar';
import Exercises from './pages/Exercises';
import CompletedWorkouts from './pages/CompletedWorkouts';
import Home from './pages/Home';
import 'fontsource-roboto';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/workout-app" element={<Home />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/completed-workouts" element={<CompletedWorkouts />} />
      </Routes>
    </>
  );
}

export default App;
