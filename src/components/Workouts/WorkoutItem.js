import React from 'react';

import Card from '../UI/Card';
function WorkoutItem(props) {
  return (
    <React.Fragment>
      <Card
        workouts={props.workouts}
        onDeleteWorkout={props.onDeleteWorkout}
        key={Math.random().toString()}
        cardID={props.cardID}
        workoutID={props.workoutID}
        title={props.title}
        type={props.type}
        sets={props.sets}
        reps={props.reps}
      ></Card>
    </React.Fragment>
  );
}

export default WorkoutItem;
