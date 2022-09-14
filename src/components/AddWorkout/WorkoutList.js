import React from 'react';
import AddWorkout from './AddWorkoutForm';
import classes from './WorkoutList.module.css';

function WorkoutList(props) {
  return (
    <React.Fragment>
      <h1>{props.workoutName}</h1>
    </React.Fragment>
  );
}

export default WorkoutList;
