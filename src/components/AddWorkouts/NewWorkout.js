import React from 'react';
import AddWorkoutModal from './AddWorkoutModal';
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
      <AddWorkoutModal
        onAddWorkout={props.onAddWorkout}
        onSaveWorkout={saveWorkoutDataHandler}
      />
    </React.Fragment>
  );
}

export default NewWorkout;
