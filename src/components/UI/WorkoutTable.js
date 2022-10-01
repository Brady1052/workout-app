import React, { useContext } from 'react';
import WorkoutsContext from '../../context/workouts-context';

function WorkoutTable() {
  const ctx = useContext(WorkoutsContext);

  const exerciseInfo = (info) => {
    const map = info.map((exercise) => {
      return (
        <React.Fragment>
          <tr>
            <td>{exercise.name}</td>
            <td>{exercise.type}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.sets}</td>
            <td>{exercise.reps}</td>
          </tr>
        </React.Fragment>
      );
    });
    return map;
  };
  return (
    <React.Fragment>
      {ctx.workouts.map((workout) => {
        return (
          <React.Fragment>
            <h1>{workout.workoutName}</h1>
            <table
              key={Math.random().toString()}
              className="table table-striped"
            >
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Weight</th>
                  <th scope="col">Sets</th>
                  <th scope="col">Reps</th>
                </tr>
              </thead>
              <tbody>{exerciseInfo(workout.exercises)}</tbody>
            </table>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}

export default WorkoutTable;
