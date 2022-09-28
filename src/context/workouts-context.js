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

  const addexerciseHandler = (exercise) => {
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
      exerciseID: Math.random().toString(),
    };
    addexerciseHandler(exerciseData);
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
    setexerciseType('Select exercise Type');
    setexerciseWeight('');
    setNumSets('');
    setNumReps('');
  };

  const closeModal = () => {
    setexerciseName('');
    setexerciseType('Select exercise Type');
    setexerciseWeight('');
    setNumSets('');
    setNumReps('');
  };

  // exercise Form Context
  const [formState, setFormState] = useState([]);
  const [formArray, setFormArray] = useState([]);
  const [exerciseArray, setexerciseArray] = useState([]);
  const [workoutName, setWorkoutName] = useState('');

  const workoutNameHandler = (e) => {
    setWorkoutName(e.target.value);
  };

  const formStateHandler = (e) => {
    setFormState(e.target.value);
  };

  const exerciseArrayHandler = () => {
    setexerciseArray(formArray);
  };
  //   Effect for the form that is displayed everytime the user adds an exerise to their exercise
  useEffect(() => {
    for (let i = 0; i < exercises.length; i++) {
      if (exercises[i].name === formState) {
        setFormArray((prev) => {
          return [...prev, exercises[i]];
        });
        setexerciseArray((prev) => {
          return [...prev, exercises[i]];
        });
      }
      console.log('hooray');
    }
  }, [formState]);
  // Effect for the exercise information saved to local storage
  //   useEffect(() => {
  //     for (let i = 0; i < exercises.length; i++) {
  //       if (exercises[i].name === exerciseArray) {
  //         setexerciseArray((prev) => {
  //           return [...prev, exercises[i]];
  //         });
  //       }
  //     }
  //   }, [exerciseArray]);

  //Save form to local storage
  //******** Handles local storage, and appending to local storage ***********//
  useEffect(() => {
    /** If it is the user's first time visitng the site then store a exercises object set to an empty array in local storage **/
    if (localStorage.getItem('exercises') === null) {
      localStorage.setItem('exercises', JSON.stringify([]));
    }

    /** If the user does not have any exercises saved, but they have already visited the site then set the local storage equal
        to the exercise they are currently adding **/
    if (
      localStorage.getItem('exercises') === '[]' &&
      exerciseArray.length !== 0
    ) {
      localStorage.setItem('exercises', JSON.stringify(exerciseArray));
    }

    /** If the user has left the site, is coming back, and has saved exercises then set the exercises state equal to their 
        saved data **/
    if (
      JSON.parse(localStorage.getItem('exercises')).length > 0 &&
      exerciseArray.length === 0
    ) {
      setexerciseArray(JSON.parse(localStorage.getItem('exercises')));
    }

    /** If the exercises state is greater than zero, and the user adds a exercise - add their exercise to the saved exercises array in local storage  **/
    if (exerciseArray.length > 0) {
      localStorage.setItem('exercises', JSON.stringify(exerciseArray));
    }
  }, [exerciseArray]);

  return (
    <exercisesContext.Provider
      value={{
        exercises: exercises,
        exerciseName: exerciseName,
        exerciseType: exerciseType,
        weight: exerciseWeight,
        numSets: numSets,
        numReps: numReps,
        formState: formState,
        formArray: formArray,
        exerciseArray: exerciseArray,
        workoutNameHandler: workoutNameHandler,
        formStateHandler: formStateHandler,
        addexerciseHandler: addexerciseHandler,
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
