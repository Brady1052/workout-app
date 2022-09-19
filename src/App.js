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
  /********************************************************************************** */

  /****** Updates workout state when user adds a workout ******/
  const addWorkoutHandler = (workout) => {
    setWorkouts((prevState) => {
      return [...prevState, workout];
    });
  };
  /****************************************************/

  /****  Updates workout state when user deletes a workout. Also updates local storage to reflect the new workout state, and re-renders the component so that the proper workouts are displayed****/
  const deleteWorkout = (updatedWorkoutList) => {
    setWorkouts(updatedWorkoutList);
    localStorage.setItem('Workouts', JSON.stringify(workouts));
    forceRenderHandler();
  };
  /********************************************************************************** */

  //******** Handles setting local storage, and appending to local storage ***********//
  useEffect(() => {
    /** If it is the user's first time visitng the site then store a Workouts object set to an empty array in local storage **/
    if (localStorage.getItem('Workouts') === null) {
      localStorage.setItem('Workouts', JSON.stringify([]));
    }

    /** If the user does not have any workouts saved, but they have already visited the site then set the local storage equal
        to the workout they are currently adding **/
    if (localStorage.getItem('Workouts') === '[]' && workouts.length !== 0) {
      localStorage.setItem('Workouts', JSON.stringify(workouts));
    }

    /** If the user has left the site, is coming back, and has saved workouts then set the workouts state equal to their 
        saved data **/
    if (
      JSON.parse(localStorage.getItem('Workouts')).length > 0 &&
      workouts.length === 0
    ) {
      setWorkouts(JSON.parse(localStorage.getItem('Workouts')));
    }

    /** If the workouts state is greater than zero, and the user adds a workout - add their workout to the saved workouts array in local storage  **/
    if (workouts.length > 0) {
      localStorage.setItem('Workouts', JSON.stringify(workouts));
    }
  }, [workouts]);
  //******************************************************************************//

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
