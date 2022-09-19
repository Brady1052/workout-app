import React from 'react';
import WorkoutItem from './WorkoutItem';

function Workouts(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {props.workouts.map((workout) => {
            return (
              <WorkoutItem
                deleteWorkout={props.onDeleteWorkout}
                key={workout.id}
                title={workout.name}
                type={workout.type}
                sets={workout.sets}
                reps={workout.reps}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Workouts;
