import React from 'react';
import AddWorkoutModal from './AddWorkoutModal';
function NewWorkout(props) {
  const saveWorkoutDataHandler = (enteredWorkoutData) => {
    const workoutData = {
      ...enteredWorkoutData,
      id: Math.random().toString(),
    };
    console.log(workoutData);
    props.onAddWorkout(workoutData);
  };

  return (
    <React.Fragment>
      <AddWorkoutModal onSaveWorkout={saveWorkoutDataHandler} />
    </React.Fragment>
  );
}

export default NewWorkout;
