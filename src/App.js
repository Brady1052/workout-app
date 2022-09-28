import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Layout/Navbar';
import ExerciseCard from './components/UI/ExerciseCard';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      {/* <Route path="/" element={<Home />} /> */}
      <ExerciseCard />
    </React.Fragment>
  );
}

export default App;
