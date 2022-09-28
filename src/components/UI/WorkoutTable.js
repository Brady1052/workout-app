import React, { useContext } from 'react';
import WorkoutsContext from '../../context/workouts-context';

function WorkoutTable() {
  const ctx = useContext(WorkoutsContext);
  //   const addExercise = () => {
  //     if ()
  //   }
  //   const formWorkoutChecker = () => {
  //     for (i = 0; i < ctx.formState.length; i++) {
  //         console.log(ctx.formState[i])
  //     }
  //   };

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
          {ctx.formArray.map((workout) => {
            return (
              <tr>
                <th scope="row">{workout.name}</th>
                <td>{workout.type}</td>
                <td>{workout.weight}</td>
                <td>{workout.sets}</td>
                <td>{workout.reps}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default WorkoutTable;
