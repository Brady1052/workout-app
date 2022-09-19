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
                workouts={props.workouts}
                onDeleteWorkout={props.onDeleteWorkout}
                key={workout.workoutID}
                workoutID={workout.workoutID}
                cardID={workout.workoutID}
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
