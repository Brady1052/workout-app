import React from 'react';
import AddWorkoutModal from './AddWorkoutModal';
function NewWorkout(props) {
  const saveWorkoutDataHandler = (enteredWorkoutData) => {
    const workoutData = {
      ...enteredWorkoutData,
      workoutID: Math.random().toString(),
    };
    props.onAddWorkout(workoutData);
  };

  return (
    <React.Fragment>
      <AddWorkoutModal onSaveWorkout={saveWorkoutDataHandler} />
    </React.Fragment>
  );
}

export default NewWorkout;
