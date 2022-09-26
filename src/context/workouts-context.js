import React, { useState, useEffect } from 'react';

const WorkoutsContext = React.createContext({
  workouts: [],
  addWorkoutHandler: (workout) => {},
  deleteWorkout: (updatedWorkoutList) => {},
  workoutNameHandler: () => {},
});

export const WorkoutsContextProvider = (props) => {
  const [forceRender, setForceRender] = useState(0);

  const [workouts, setWorkouts] = useState([]);

  const addWorkoutHandler = (workout) => {
    workout = {
      ...workout,
    };
    setWorkouts((prevState) => {
      return [...prevState, workout];
    });
  };

  const forceRenderHandler = () => {
    setForceRender((prevState) => {
      return prevState + 1;
    });
  };

  /****  Updates workout state when user deletes a workout. Also updates local storage to reflect the new workout state, and re-renders the component so that the proper workouts are displayed****/
  //   const deleteWorkout = (updatedWorkoutList) => {
  //     setWorkouts(updatedWorkoutList);
  //     localStorage.setItem('Workouts', JSON.stringify(workouts));
  //     forceRenderHandler();
  //   };
  const deleteWorkoutHandler = (updatedWorkoutList) => {
    setWorkouts(updatedWorkoutList);
    localStorage.setItem('Workouts', JSON.stringify(workouts));
    forceRenderHandler();
  };

  const deleteWorkout = () => {
    workouts.forEach((workout, idx) => {
      if (workout.cardID === workout.workoutID) {
        workouts.splice(idx, 1);
      }
      return deleteWorkoutHandler(workouts);
    });
  };

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

  const [workoutName, setWorkoutName] = useState('');
  const [workoutType, setWorkoutType] = useState('');
  const [numSets, setNumSets] = useState('');
  const [numReps, setNumReps] = useState('');

  const workoutNameHandler = (e) => {
    setWorkoutName(e.target.value);
  };

  const workoutTypeHandler = (e) => {
    setWorkoutType(e.target.value);
  };

  const numSetsHandler = (e) => {
    setNumSets(e.target.value);
  };

  const numRepsHandler = (e) => {
    setNumReps(e.target.value);
  };

  const saveWorkoutDataHandler = (enteredWorkoutData) => {
    const workoutData = {
      ...enteredWorkoutData,
      workoutID: Math.random().toString(),
    };
    addWorkoutHandler(workoutData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const workoutData = {
      key: Math.random().toString(),
      name: workoutName,
      type: workoutType,
      sets: numSets,
      reps: numReps,
    };
    saveWorkoutDataHandler(workoutData);
    setWorkoutName('');
    setWorkoutType('Select Workout Type');
    setNumSets('');
    setNumReps('');
  };

  const closeModal = () => {
    setWorkoutName('');
    setWorkoutType('Select Workout Type');
    setNumSets('');
    setNumReps('');
  };
  return (
    <WorkoutsContext.Provider
      value={{
        workouts: workouts,
        workoutName: workoutName,
        workoutType: workoutType,
        numSets: numSets,
        numReps: numReps,
        addWorkoutHandler: addWorkoutHandler,
        deleteWorkout: deleteWorkout,
        workoutNameHandler: workoutNameHandler,
        workoutTypeHandler: workoutTypeHandler,
        numRepsHandler: numRepsHandler,
        numSetsHandler: numSetsHandler,
        submitHandler: submitHandler,
        closeModal: closeModal,
      }}
    >
      {props.children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsContext;
