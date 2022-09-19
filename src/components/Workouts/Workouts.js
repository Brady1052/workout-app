import React from 'react';
import WorkoutItem from './WorkoutItem';

function Workouts(props) {
  // for (i = 0; i < props.workouts.length; i++) {
  //   console.log(props.workouts[i]);
  // }

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
              ></WorkoutItem>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Workouts;
