import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Layout/Navbar';
import ExerciseCard from './components/UI/ExerciseCard';
import WorkoutTable from './components/UI/WorkoutTable';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      {/* <Route path="/" element={<Home />} /> */}
      <ExerciseCard />
      <WorkoutTable key={Math.random().toString()} />
    </React.Fragment>
  );
}

export default App;
