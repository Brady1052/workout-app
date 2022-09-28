import React, { useState, useEffect } from 'react';

const exercisesContext = React.createContext({
  exercises: [],
  addexerciseHandler: (exercise) => {},
  deleteexercise: (updatedexerciseList) => {},
  exerciseNameHandler: () => {},
});

// Provides state and functions to entire application
export const WorkoutsContextProvider = (props) => {
  const [forceRender, setForceRender] = useState(0);

  const [exercises, setExercises] = useState([]);

  const addExerciseHandler = (exercise) => {
    exercise = {
      ...exercise,
    };
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

  const deleteExerciseHandler = (updatedexerciseList) => {
    setExercises(updatedexerciseList);
    localStorage.setItem('Exercises', JSON.stringify(exercises));
    forceRenderHandler();
  };

  const deleteExercise = () => {
    exercises.forEach((exercise, idx) => {
      if (exercise.cardID === exercise.exerciseID) {
        exercises.splice(idx, 1);
      }
      return deleteExerciseHandler(exercises);
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
      exerciseID: Math.random().toString(),
    };
    addExerciseHandler(exerciseData);
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
    setExerciseName('');
    setExerciseType('Select exercise Type');
    setExerciseWeight('');
    setNumSets('');
    setNumReps('');
  };

  const closeModal = () => {
    setExerciseName('');
    setExerciseType('Select exercise Type');
    setExerciseWeight('');
    setNumSets('');
    setNumReps('');
  };

  //********************************* Workout Context *********************//
  const [formState, setFormState] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState([]);
  const [formArray, setFormArray] = useState([]);
  const [workouts, setWorkouts] = useState([]);
  const [workoutName, setWorkoutName] = useState('');

  const addWorkoutHandler = (workout) => {
    setWorkouts((prev) => {
      return [...prev, workout];
    });
  };

  const selectedExerciseHandler = (e) => {
    setSelectedExercise(e.target.value);
  };

  useEffect(() => {
    console.log(selectedExercise);
  }, [selectedExercise]);

  const workoutNameHandler = (e) => {
    setWorkoutName(e.target.value);
  };

  const formStateHandler = () => {
    setWorkouts((prev) => {
      return [...prev, formArray];
    });
  };

  const saveWorkoutHandler = (workoutInformation) => {
    const workoutData = {
      workoutName: workoutName,
      ...workoutInformation,
      key: Math.random().toString(),
    };
  };

  const submitWorkoutHandler = (e) => {
    e.preventDefault();
    const workoutInfo = {
      workoutName: workoutName,
      exercises: [],
    };
    setWorkoutName('');
  };
  //   Effect for the table that is displayed everytime the user adds an exerise to their workout
  const displayExerciseTable = () => {
    for (let i = 0; i < exercises.length; i++) {
      if (exercises[i].name === selectedExercise) {
        setFormArray((prev) => {
          return [...prev, exercises[i]];
        });
        setWorkouts((prev) => {
          return [...prev, exercises[i]];
        });
      }
      console.log('hooray');
    }
  };

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

  return (
    <exercisesContext.Provider
      value={{
        exercises: exercises,
        exerciseName: exerciseName,
        exerciseType: exerciseType,
        exerciseWeight: exerciseWeight,
        numSets: numSets,
        numReps: numReps,
        formState: formState,
        formArray: formArray,
        workouts: workouts,
        selectedExercise: selectedExercise,
        displayExerciseTable: displayExerciseTable,
        selectedExerciseHandler: selectedExerciseHandler,
        workoutNameHandler: workoutNameHandler,
        formStateHandler: formStateHandler,
        addExerciseHandler: addExerciseHandler,
        deleteExercise: deleteExercise,
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
    </exercisesContext.Provider>
  );
};

export default exercisesContext;
