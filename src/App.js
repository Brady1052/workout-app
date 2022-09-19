import React, { useState, useEffect } from 'react';
import './App.css';
import Workouts from './components/Workouts/Workouts';
import WrapperRow from './components/UI/WrapperRow';
import NavBar from './components/LayoutComponents/Navbar';

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkoutHandler = (workout) => {
    setWorkouts((prevState) => {
      return [...prevState, workout];
    });
  };
  const deleteWorkout = () => {};

  //******** Handles setting, and adding to local storage  ***********//
  useEffect(() => {
    if (localStorage.getItem('Workouts') === null) {
      localStorage.setItem('Workouts', JSON.stringify([]));
    }
    if (localStorage.getItem('Workouts') === '[]' && workouts.length !== 0) {
      localStorage.setItem('Workouts', JSON.stringify(workouts));
    }
    if (
      JSON.parse(localStorage.getItem('Workouts')).length > 0 &&
      workouts.length === 0
    ) {
      setWorkouts(JSON.parse(localStorage.getItem('Workouts')));
    }
    if (workouts.length > 0) {
      localStorage.setItem('Workouts', JSON.stringify(workouts));
    }
  }, [workouts]);
  //*******************************************************************//
  return (
    <React.Fragment>
      <NavBar onAddWorkout={addWorkoutHandler} />
      <WrapperRow>
        <Workouts onDeleteWorkout={deleteWorkout} workouts={workouts} />
      </WrapperRow>
    </React.Fragment>
  );
}

export default App;
