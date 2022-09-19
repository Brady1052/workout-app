import React from 'react';
import WorkoutItem from './WorkoutItem';

function Workouts(props) {
  console.log(props.workouts);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {props.workouts.map((workout) => {
            return (
              <WorkoutItem
                deleteWorkout={props.onDeleteWorkout}
                key={workout.id}
                id={workout.id}
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
