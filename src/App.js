import React, { useState } from 'react';
import './App.css';

import Workouts from './components/Workouts/Workouts';
import WrapperRow from './components/UI/WrapperRow';
import NavBar from './components/LayoutComponents/Navbar';

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkoutHandler = (workout) => {
    setWorkouts((prevWorkouts) => {
      return [workout, ...prevWorkouts];
    });
  };
  return (
    <React.Fragment>
      <NavBar onAddWorkout={addWorkoutHandler} />
      <WrapperRow>
        <Workouts workouts={workouts} />
      </WrapperRow>
    </React.Fragment>
  );
}

export default App;
