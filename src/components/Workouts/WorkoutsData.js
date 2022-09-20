import React from 'react';
import Card from '../UI/Card';

function WorkoutItem(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          {props.workouts.map((workout) => {
            return (
              <Card
                workouts={props.workouts}
                onDeleteWorkout={props.onDeleteWorkout}
                key={workout.workoutID}
                workoutID={workout.workoutID}
                cardID={workout.workoutID}
                title={workout.name}
                type={workout.type}
                sets={workout.sets}
                reps={workout.reps}
              ></Card>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default WorkoutItem;
