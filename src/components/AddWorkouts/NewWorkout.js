import React from 'react';
import AddWorkoutModal from './AddWorkoutModal';
function NewWorkout(props) {
  const saveWorkoutDataHandler = (enteredWorkoutData) => {
    const workoutData = {
      ...enteredWorkoutData,
      id: Math.random().toString(),
    };
    const savedDataArray = [];
    savedDataArray.push(workoutData);
    localStorage.setItem('Workout', JSON.stringify(savedDataArray));
    props.onAddWorkout(workoutData);
  };
  return (
    <React.Fragment>
      <AddWorkoutModal onSaveWorkout={saveWorkoutDataHandler} />
    </React.Fragment>
  );
}

export default NewWorkout;
