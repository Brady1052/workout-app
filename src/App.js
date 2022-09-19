import React, { useState, useEffect } from 'react';
import './App.css';
import Workouts from './components/Workouts/Workouts';
import WrapperRow from './components/UI/WrapperRow';
import NavBar from './components/LayoutComponents/Navbar';

function App() {
  const [forceRender, setForceRender] = useState(0);
  const [workouts, setWorkouts] = useState([]);
  /* When a workout is removed it initially removes it from local storage,
   but does not remove the card associated with it until the page is re-rendered. The forceRender state
   is used to re-render the component everytime a workout is deleted thus removing the card immediately */
  const forceRenderHandler = () => {
    setForceRender((prevState) => {
      return prevState + 1;
    });
  };

  const addWorkoutHandler = (workout) => {
    setWorkouts((prevState) => {
      return [...prevState, workout];
    });
  };
  const deleteWorkout = (updatedWorkoutList) => {
    console.log('APP.JS');
    setWorkouts(updatedWorkoutList);
    console.log(workouts);
    localStorage.setItem('Workouts', JSON.stringify(workouts));
    forceRenderHandler();
  };

  //******** Handles setting local storage, and appending to local storage  ***********//
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
