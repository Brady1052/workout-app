import React, { useState } from 'react';
import './App.css';
import NewWorkout from './components/AddWorkouts/NewWorkout';
import Workouts from './components/Workouts/Workouts';
import Wrapper from './components/UI/Wrapper';
import NavBar from './components/LayoutComponents/Navbar';
const addWorkoutHandler = (workout) => {
  console.log('In app.js');
  console.log(workout);
};

function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkoutHandler = (workout) => {
    setWorkouts((prevWorkouts) => {
      return [workout, ...prevWorkouts];
    });
  };
  return (
    <React.Fragment>
      <NavBar />
      <NewWorkout onAddWorkout={addWorkoutHandler} />
      <Wrapper>
        <Workouts workouts={workouts} />
      </Wrapper>
    </React.Fragment>
  );
}

export default App;
