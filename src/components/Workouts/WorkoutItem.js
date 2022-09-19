import React from 'react';

import Card from '../UI/Card';
function WorkoutItem(props) {
  return (
    <React.Fragment>
      <Card
        onDeleteWorkout={props.onDeleteWorkout}
        key={props.id}
        id={props.id}
        title={props.title}
        type={props.type}
        sets={props.sets}
        reps={props.reps}
      ></Card>
    </React.Fragment>
  );
}

export default WorkoutItem;
