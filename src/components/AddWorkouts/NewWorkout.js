import React from 'react';
import AddWorkoutModal from './AddWorkoutModal';
function NewWorkout(props) {
  const saveWorkoutDataHandler = (enteredWorkoutData) => {
    const workoutData = {
      ...enteredWorkoutData,
      id: Math.random().toString(),
    };
    props.onAddWorkout(workoutData);
    props.onStoreWorkout(workoutData);
  };

  return (
    <React.Fragment>
      <AddWorkoutModal onSaveWorkout={saveWorkoutDataHandler} />
    </React.Fragment>
  );
}

export default NewWorkout;
