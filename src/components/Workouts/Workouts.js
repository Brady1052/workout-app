import React from 'react';
import WorkoutItem from './WorkoutItem';

function Workouts() {
  const savedWorkouts = JSON.parse(localStorage.getItem('Workout'));
  return (
    <React.Fragment>
      {savedWorkouts.map((workout) => (
        <WorkoutItem
          key={workout.id}
          title={workout.name}
          type={workout.type}
          sets={workout.sets}
          reps={workout.reps}
        />
      ))}
    </React.Fragment>
  );
}

export default Workouts;
