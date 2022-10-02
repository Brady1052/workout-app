import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Layout/Navbar';
import ExerciseCard from './components/UI/ExerciseCard';
import WorkoutTable from './components/UI/WorkoutTable';
import Exercises from './pages/Exercises';
import Workouts from './pages/Workouts';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ExerciseCard />
      <WorkoutTable />
      <Routes>
        {/* <Route path="/exercises" element={<Exercises />} />
        <Route path="/workouts" element={<Workouts />} /> */}
      </Routes>
    </React.Fragment>
  );
}

export default App;
