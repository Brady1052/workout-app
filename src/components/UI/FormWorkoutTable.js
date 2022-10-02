import React, { useContext } from 'react';
import WorkoutsContext from '../../context/workouts-context';

function WorkoutTable() {
  const ctx = useContext(WorkoutsContext);

  return (
    <React.Fragment>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Weight</th>
            <th scope="col">Sets</th>
            <th scope="col">Reps</th>
          </tr>
        </thead>
        <tbody>
          {ctx.formArray.map((exercise) => {
            return (
              <tr key={Math.random().toString()}>
                <th scope="row">{exercise.name}</th>
                <td>{exercise.type}</td>
                <td>{exercise.weight}</td>
                <td>{exercise.sets}</td>
                <td>{exercise.reps}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default WorkoutTable;
