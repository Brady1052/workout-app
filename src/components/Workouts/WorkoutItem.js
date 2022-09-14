import React from 'react';
import classes from './WorkoutItem.module.css';
function WorkoutItem(props) {
  return (
    <React.Fragment>
      <h1 className={classes.h1}>{`Your Workout: ${props.title}`}</h1>
      <p>{`Workout type: ${props.type}`}</p>
    </React.Fragment>
  );
}

export default WorkoutItem;
