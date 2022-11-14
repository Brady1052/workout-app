import React, { useState, useEffect } from 'react';

const ExercisesContext = React.createContext({});

// Provides state and functions to entire application
export const WorkoutsContextProvider = (props) => {
  const [forceRender, setForceRender] = useState(0);

  const [exercises, setExercises] = useState([]);

  const addExerciseHandler = (exercise) => {
    setExercises((prevState) => {
      return [...prevState, exercise];
    });
  };

  // Re-renders app when exercise is deleted so that the card is removed from the dom immediately
  const forceRenderHandler = () => {
    setForceRender((prevState) => {
      return prevState + 1;
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
    if (localStorage.getItem('Exercises') === '[]' && exercises.length !== 0) {
      localStorage.setItem('Exercises', JSON.stringify(exercises));
    }

    /** If the user has left the site, is coming back, and has saved exercises then set the exercise state equal to their 
        saved data **/
    if (
      JSON.parse(localStorage.getItem('Exercises')).length > 0 &&
      exercises.length === 0
    ) {
      setExercises(JSON.parse(localStorage.getItem('Exercises')));
    }

    /** If the exercise state is greater than zero, and the user adds a exercise - add their exercise to the saved exercises array in local storage  **/
    if (exercises.length > 0) {
      localStorage.setItem('Exercises', JSON.stringify(exercises));
    }
  }, [exercises]);

  const [exerciseName, setExerciseName] = useState('');
  const [exerciseType, setExerciseType] = useState('');
  const [exerciseWeight, setExerciseWeight] = useState('');
  const [numSets, setNumSets] = useState('');
  const [numReps, setNumReps] = useState('');

  const exerciseNameHandler = (e) => {
    setExerciseName(e.target.value);
  };

  const exerciseTypeHandler = (e) => {
    setExerciseType(e.target.value);
  };

  const exerciseWeightHandler = (e) => {
    setExerciseWeight(e.target.value);
  };

  const numSetsHandler = (e) => {
    setNumSets(e.target.value);
  };

  const numRepsHandler = (e) => {
    setNumReps(e.target.value);
  };

  const saveExerciseDataHandler = (enteredExerciseData) => {
    const exerciseData = {
      ...enteredExerciseData,
    };
    addExerciseHandler(exerciseData);
  };
  //   Handles submit and closing events for the exercise modal
  const [exerciseOpen, setExerciseOpen] = useState(false);
  const handleExerciseOpen = () =>
    !exerciseOpen ? setExerciseOpen(true) : console.log();
  const handleExerciseClose = () => setExerciseOpen(false);

  const submitHandler = (e) => {
    e.preventDefault();
    const exerciseData = {
      id: Math.random().toString(),
      key: Math.random().toString(),
      name: exerciseName,
      type: exerciseType,
      weight: exerciseWeight,
      sets: numSets,
      reps: numReps,
    };
    handleExerciseClose();
    saveExerciseDataHandler(exerciseData);
    setExerciseName('');
    setExerciseType('');
    setExerciseWeight('');
    setNumSets('');
    setNumReps('');
  };

  const closeModal = () => {
    handleExerciseClose();
    setExerciseName('');
    setExerciseType('');
    setExerciseWeight('');
    setNumSets('');
    setNumReps('');
  };

  //********************************* Workout Context ********************************//

  //Used for looping through every exercise the user has saved and matching it with the name in workout dropdown
  const [selectedExerciseName, setSelectedExerciseName] = useState('');
  //Used for saving all the exercises that the user saves to their workout to an array that can be used inside of the workout object
  const [selectedExercises, setSelectedExercises] = useState([]);
  //Used for determining what exercises to show added that were added to the table in the workout modal
  const [formArray, setFormArray] = useState([]);
  //Used for saving all workout objects inside one array
  const [workouts, setWorkouts] = useState([]);

  //Used for saving the name of the workout
  const [workoutName, setWorkoutName] = useState('');

  const deleteWorkoutHandler = (updatedWorkoutList) => {
    setWorkouts(updatedWorkoutList);
    localStorage.setItem('Workouts', JSON.stringify(workouts));
    forceRenderHandler();
  };

  const deleteWorkout = () => {
    exercises.forEach((workout, idx) => {
      if (workout.tableID === workout.id) {
        workouts.splice(idx, 1);
      }
      return deleteWorkoutHandler(workouts);
    });
  };

  // //Used for looping through every exercise the user has saved and matching it with the name in workout dropdown
  // Saves the selected exercise name
  const selectedExerciseNameHandler = (e) => {
    setSelectedExerciseName(e.target.value);
  };
  // Sets the name of the workout to what the user types in the workout modal
  const workoutNameHandler = (e) => {
    setWorkoutName(e.target.value);
  };

  // Creats the workout object that is saved in local storage and reverts all the input in the workout modal back to their default value
  const saveWorkoutHandler = () => {
    const workoutData = {
      key: Math.random().toString(),
      id: Math.random().toString(),
      workoutName: workoutName,
      exercises: selectedExercises,
    };
    setWorkouts((prev) => {
      return [...prev, workoutData];
    });
    setSelectedExercises([]);
    setWorkoutName('');
  };

  //   Function for the table that is displayed everytime the user adds an exerise to their workout -  Also adds their selected exercise to storage
  const displayExerciseTable = () => {
    for (let i = 0; i < exercises.length; i++) {
      if (exercises[i].name === selectedExerciseName) {
        setFormArray((prev) => {
          return [...prev, exercises[i]];
        });
        setSelectedExercises((prev) => {
          return [...prev, exercises[i]];
        });
      }
    }
  };

  const [workoutOpen, setWorkoutOpen] = useState(false);
  const handleWorkoutOpen = () =>
    !workoutOpen ? setWorkoutOpen(true) : console.log();
  const handleWorkoutClose = () => setWorkoutOpen(false);

  //Save form to local storage
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

    /** If the workouts state length is greater than zero, and the user adds a workout - add their workout to the saved workouts array in local storage  **/
    if (workouts.length > 0) {
      localStorage.setItem('Workouts', JSON.stringify(workouts));
    }
  }, [workouts]);

  /**          START WORKOUT CONTEXT        **/

  const [startWorkout, setStartWorkout] = useState(false);
  const handleStartWorkout = () =>
    !startWorkout ? setStartWorkout(true) : setStartWorkout(false);

  const checkWorkout = (id) => {
    for (let i = 0; i < workouts.length; i++) {
      if (id === workouts[i].id) {
      }
    }
  };

  const handleEndWorkout = () => setStartWorkout(false);

  return (
    <ExercisesContext.Provider
      value={{
        startWorkout: startWorkout,
        exercises: exercises,
        exerciseName: exerciseName,
        exerciseType: exerciseType,
        exerciseWeight: exerciseWeight,
        numSets: numSets,
        numReps: numReps,
        formArray: formArray,
        workouts: workouts,
        workoutName: workoutName,
        selectedExerciseName: selectedExerciseName,
        checkWorkout: checkWorkout,
        handleStartWorkout: handleStartWorkout,
        handleEndWorkout: handleEndWorkout,
        handleExerciseClose: handleExerciseClose,
        handleExerciseOpen: handleExerciseOpen,
        setWorkoutOpen: setWorkoutOpen,
        exerciseOpen: exerciseOpen,
        workoutOpen: workoutOpen,
        handleWorkoutOpen: handleWorkoutOpen,
        handleWorkoutClose: handleWorkoutClose,
        deleteWorkout: deleteWorkout,
        setExercises: setExercises,
        setWorkouts: setWorkouts,
        setFormArray: setFormArray,
        setWorkoutName: setWorkoutName,
        setSelectedExerciseName: setSelectedExerciseName,
        saveWorkoutHandler: saveWorkoutHandler,
        displayExerciseTable: displayExerciseTable,
        selectedExerciseNameHandler: selectedExerciseNameHandler,
        workoutNameHandler: workoutNameHandler,
        addExerciseHandler: addExerciseHandler,
        exerciseNameHandler: exerciseNameHandler,
        exerciseTypeHandler: exerciseTypeHandler,
        exerciseWeightHandler: exerciseWeightHandler,
        numRepsHandler: numRepsHandler,
        numSetsHandler: numSetsHandler,
        submitHandler: submitHandler,
        closeModal: closeModal,
        forceRenderHandler: forceRenderHandler,
      }}
    >
      {props.children}
    </ExercisesContext.Provider>
  );
};

export default ExercisesContext;
