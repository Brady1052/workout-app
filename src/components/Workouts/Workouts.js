import React from 'react';

import WorkoutItem from './WorkoutItem';

function Workouts(props) {
  return (
    <React.Fragment>
      {props.workouts.map((exercise) => (
        <WorkoutItem title={exercise.name} type={exercise.type} />
      ))}
    </React.Fragment>
  );
}

export default Workouts;
