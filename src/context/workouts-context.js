import React, { useState, useEffect } from 'react';

const WorkoutsContext = React.createContext({
  workouts: [],
  addWorkoutHandler: (workout) => {},
  deleteWorkout: (updatedWorkoutList) => {},
  exerciseNameHandler: () => {},
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
    localStorage.setItem('Exercises', JSON.stringify(workouts));
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
    /** If it is the user's first time visitng the site then store a Exercises object set to an empty array in local storage **/
    if (localStorage.getItem('Exercises') === null) {
      localStorage.setItem('Exercises', JSON.stringify([]));
    }

    /** If the user does not have any Exercises saved, but they have already visited the site then set the local storage equal
        to the exercise they are currently adding **/
    if (localStorage.getItem('Exercises') === '[]' && workouts.length !== 0) {
      localStorage.setItem('Exercises', JSON.stringify(workouts));
    }

    /** If the user has left the site, is coming back, and has saved exercises then set the exercise state equal to their 
        saved data **/
    if (
      JSON.parse(localStorage.getItem('Exercises')).length > 0 &&
      workouts.length === 0
    ) {
      setWorkouts(JSON.parse(localStorage.getItem('Exercises')));
    }

    /** If the exercise state is greater than zero, and the user adds a exercise - add their workout to the saved workouts array in local storage  **/
    if (workouts.length > 0) {
      localStorage.setItem('Exercises', JSON.stringify(workouts));
    }
  }, [workouts]);

  //Adding a exercise, context

  const [exerciseName, setexerciseName] = useState('');
  const [exerciseType, setexerciseType] = useState('');
  const [exerciseWeight, setexerciseWeight] = useState('');
  const [numSets, setNumSets] = useState('');
  const [numReps, setNumReps] = useState('');

  const exerciseNameHandler = (e) => {
    setexerciseName(e.target.value);
  };

  const exerciseTypeHandler = (e) => {
    setexerciseType(e.target.value);
  };

  const exerciseWeightHandler = (e) => {
    setexerciseWeight(e.target.value);
  };

  const numSetsHandler = (e) => {
    setNumSets(e.target.value);
  };

  const numRepsHandler = (e) => {
    setNumReps(e.target.value);
  };

  const saveExerciseDataHandler = (enteredexerciseData) => {
    const exerciseData = {
      ...enteredexerciseData,
      workoutID: Math.random().toString(),
    };
    addWorkoutHandler(exerciseData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const exerciseData = {
      key: Math.random().toString(),
      name: exerciseName,
      type: exerciseType,
      weight: exerciseWeight,
      sets: numSets,
      reps: numReps,
    };
    saveExerciseDataHandler(exerciseData);
    setexerciseName('');
    setexerciseType('Select Workout Type');
    setexerciseWeight('');
    setNumSets('');
    setNumReps('');
  };

  const closeModal = () => {
    setexerciseName('');
    setexerciseType('Select Workout Type');
    setexerciseWeight('');
    setNumSets('');
    setNumReps('');
  };

  // Workout Form Context
  const [formState, setFormState] = useState([]);
  const [formArray, setFormArray] = useState([]);
  const [workoutArray, setWorkoutArray] = useState([]);
  const [workName, setWorkName] = useState('');

  const workNameHandler = (e) => {
    setWorkName(e.target.value);
  };

  const formStateHandler = (e) => {
    setFormState(e.target.value);
  };

  const workoutArrayHandler = () => {
    setWorkoutArray(formArray);
  };
  //   Effect for the form that is displayed everytime the user adds an exerise to their workout
  useEffect(() => {
    for (let i = 0; i < workouts.length; i++) {
      if (workouts[i].name === formState) {
        setFormArray((prev) => {
          return [...prev, workouts[i]];
        });
        setWorkoutArray((prev) => {
          return [...prev, workouts[i]];
        });
      }
      console.log('hooray');
    }
  }, [formState]);
  // Effect for the workout information saved to local storage
  //   useEffect(() => {
  //     for (let i = 0; i < workouts.length; i++) {
  //       if (workouts[i].name === workoutArray) {
  //         setWorkoutArray((prev) => {
  //           return [...prev, workouts[i]];
  //         });
  //       }
  //     }
  //   }, [workoutArray]);

  //Save form to local storage
  //******** Handles local storage, and appending to local storage ***********//
  useEffect(() => {
    /** If it is the user's first time visitng the site then store a Workouts object set to an empty array in local storage **/
    if (localStorage.getItem('Workouts') === null) {
      localStorage.setItem('Workouts', JSON.stringify([]));
    }

    /** If the user does not have any workouts saved, but they have already visited the site then set the local storage equal
        to the workout they are currently adding **/
    if (
      localStorage.getItem('Workouts') === '[]' &&
      workoutArray.length !== 0
    ) {
      localStorage.setItem('Workouts', JSON.stringify(workoutArray));
    }

    /** If the user has left the site, is coming back, and has saved workouts then set the workouts state equal to their 
        saved data **/
    if (
      JSON.parse(localStorage.getItem('Workouts')).length > 0 &&
      workoutArray.length === 0
    ) {
      setWorkoutArray(JSON.parse(localStorage.getItem('Workouts')));
    }

    /** If the workouts state is greater than zero, and the user adds a workout - add their workout to the saved workouts array in local storage  **/
    if (workoutArray.length > 0) {
      localStorage.setItem('Workouts', JSON.stringify(workoutArray));
    }
  }, [workoutArray]);

  return (
    <WorkoutsContext.Provider
      value={{
        workouts: workouts,
        exerciseName: exerciseName,
        exerciseType: exerciseType,
        weight: exerciseWeight,
        numSets: numSets,
        numReps: numReps,
        formState: formState,
        formArray: formArray,
        workoutArray: workoutArray,
        workNameHandler: workNameHandler,
        formStateHandler: formStateHandler,
        addWorkoutHandler: addWorkoutHandler,
        deleteWorkout: deleteWorkout,
        exerciseNameHandler: exerciseNameHandler,
        exerciseTypeHandler: exerciseTypeHandler,
        exerciseWeightHandler: exerciseWeightHandler,
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
