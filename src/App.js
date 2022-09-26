import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Layout/Navbar';
import WorkoutCard from './components/UI/WorkoutCard';

function App() {
  return (
    <React.Fragment>
      {/* <Route path="/" element={<Home />} /> */}

      <NavBar />
      <WorkoutCard />
    </React.Fragment>
  );
}

export default App;
