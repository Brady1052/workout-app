import React, { useContext } from 'react';
import WorkoutsContext from '../../context/workouts-context';

function WorkoutTable() {
  const ctx = useContext(WorkoutsContext);

  const exerciseInfo = (info) => {
    const map = info.map((exercise) => {
      return (
        <React.Fragment key={Math.random().toString()}>
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
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {ctx.workouts.map((workout) => {
        workout['tableID'] = workout.id;

        return (
          <div key={Math.random().toString()}>
            <h1 style={{ textAlign: 'center', color: 'blue' }}>
              {workout.workoutName}
            </h1>
            <table
              className="table table-striped"
              style={{
                maxWidth: '50rem',
                minWidth: '50rem',
                alignSelf: 'center',
                position: 'relative',
                marginTop: '5rem',
              }}
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
            <button
              style={{
                maxWidth: '100%',
                minWidth: '100%',
                backgroundColor: 'red',
              }}
              onClick={ctx.deleteWorkout}
            >
              Remove Workout
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default WorkoutTable;
