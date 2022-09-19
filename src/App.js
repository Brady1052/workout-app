import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Workouts from './components/Workouts/Workouts';
import WrapperRow from './components/UI/WrapperRow';
import NavBar from './components/LayoutComponents/Navbar';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [storedWorkouts, setStoredWorkouts] = useState(
    JSON.parse(localStorage.getItem('Workouts'))
  );

  const [array, setArray] = useState([]);

  const addWorkoutHandler = (workout) => {
    setWorkouts((prevState) => {
      return [...prevState, workout];
    });
  };
  const workoutsArrayHandler = () => {
    array.push(workouts);
  };

  //Store *************
  const storeWorkoutsHandler = (workout) => {
    // console.log(JSON.parse(storedWorkouts.current));
  };

  useEffect(() => {
    if (localStorage.getItem('Workouts') === null) {
      localStorage.setItem('Workouts', JSON.stringify([]));
      setArray(JSON.parse(localStorage.getItem('Workouts')));
    }
    if (localStorage.getItem('Workouts') === '[]' && workouts.length !== 0) {
      localStorage.setItem('Workouts', JSON.stringify(workouts));
      console.log(JSON.parse(localStorage.getItem('Workouts')).length);
    }
    if (
      JSON.parse(localStorage.getItem('Workouts')).length > 0 &&
      workouts.length === 0
    ) {
      console.log(
        JSON.parse(localStorage.getItem('Workouts')).length + 'ayooo'
      );
      console.log(JSON.parse(localStorage.getItem('Workouts')));
      setWorkouts(JSON.parse(localStorage.getItem('Workouts')));
      console.log(workouts);
    }
    if (workouts.length > 0) {
      localStorage.setItem('Workouts', JSON.stringify(workouts));
    }
  }, [workouts]);

  return (
    <React.Fragment>
      <NavBar
        onStoreWorkout={storeWorkoutsHandler}
        onAddWorkout={addWorkoutHandler}
      />
      <WrapperRow>
        <Workouts workouts={workouts} />
      </WrapperRow>
    </React.Fragment>
  );
}

export default App;
