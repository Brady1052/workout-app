import React from 'react';
import WorkoutTable from '../components/UI/WorkoutTable';
function Workouts() {
  return (
    <React.Fragment>
      <WorkoutTable key={Math.random().toString()} />
    </React.Fragment>
  );
}

export default Workouts;
