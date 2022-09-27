import React, { useState, useEffect } from 'react';

const WorkoutsContext = React.createContext({
  workouts: [],
  addWorkoutHandler: (workout) => {},
  deleteWorkout: (updatedWorkoutList) => {},
  workoutNameHandler: () => {},
});

// Provides state and functions to entire application
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

  // Re-renders app when workout is deleted so that the card is removed from the dom immediately
  const forceRenderHandler = () => {
    setForceRender((prevState) => {
      return prevState + 1;
    });
  };

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

  //******** Handles local storage, and appending to local storage ***********//
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

  //Adding a workout context

  const [workoutName, setWorkoutName] = useState('');
  const [workoutType, setWorkoutType] = useState('');
  const [workoutWeight, setWorkoutWeight] = useState('');
  const [numSets, setNumSets] = useState('');
  const [numReps, setNumReps] = useState('');

  const workoutNameHandler = (e) => {
    setWorkoutName(e.target.value);
  };

  const workoutTypeHandler = (e) => {
    setWorkoutType(e.target.value);
  };

  const workoutWeightHandler = (e) => {
    setWorkoutWeight(e.target.value);
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
      weight: workoutWeight,
      sets: numSets,
      reps: numReps,
    };
    saveWorkoutDataHandler(workoutData);
    setWorkoutName('');
    setWorkoutType('Select Workout Type');
    setWorkoutWeight('');
    setNumSets('');
    setNumReps('');
  };

  const closeModal = () => {
    setWorkoutName('');
    setWorkoutType('Select Workout Type');
    setWorkoutWeight('');
    setNumSets('');
    setNumReps('');
  };

  // Form Context
  const [formState, setFormState] = useState([]);
  const [formArray, setFormArray] = useState([]);

  const formStateHandler = (e) => {
    setFormState(e.target.value);
  };

  useEffect(() => {
    for (let i = 0; i < workouts.length; i++) {
      if (workouts[i].name === formState) {
        setFormArray((prev) => {
          return [...prev, workouts[i]];
        });
      }
    }
  }, [formState]);

  return (
    <WorkoutsContext.Provider
      value={{
        workouts: workouts,
        workoutName: workoutName,
        workoutType: workoutType,
        weight: workoutWeight,
        numSets: numSets,
        numReps: numReps,
        formState: formState,
        formArray: formArray,
        formStateHandler: formStateHandler,
        addWorkoutHandler: addWorkoutHandler,
        deleteWorkout: deleteWorkout,
        workoutNameHandler: workoutNameHandler,
        workoutTypeHandler: workoutTypeHandler,
        workoutWeightHandler: workoutWeightHandler,
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
