import React from 'react';
import WorkoutForm from './WorkoutForm';
import classes from './NewWorkout.module.css';
function NewWorkout(props) {
  const saveWorkoutDataHandler = (enteredWorkoutData) => {
    const workoutData = {
      ...enteredWorkoutData,
      id: Math.random().toString(),
    };
    props.onAddWorkout(workoutData);
  };
  return (
    <React.Fragment>
      <WorkoutForm onSaveWorkout={saveWorkoutDataHandler} />
    </React.Fragment>
  );
}

export default NewWorkout;
